import { useStaticQuery, graphql } from 'gatsby';
import React, { useContext } from 'react';
import CartContext from './cart-context';

export const useCart = () => {
    return useContext(CartContext);
}

const CartProvider = ({ requested = "", children }) => {

    const name_table = {
        'tip': ['tip', 'tips'],
        'canule': ['canule', 'canules'],
        'kit': ['Kit-Mix', 'Kit-Mix'],
        'pin': ['pin', 'pins']
    };

    const [articles] = React.useState(
        Object.fromEntries(
            useStaticQuery(graphql`
                {
                    allStrapiShop(sort: {order: ASC, fields: addon___Name}) {
                        nodes {
                            reference
                            Name
                            pack_size
                            pack_type
                            price
                            discount
                            addon {
                                id
                                Name
                                Banner {
                                  left_img {
                                    childImageSharp {
                                      fluid {
                                        srcWebp
                                        srcSetWebp
                                      }
                                    }
                                  }
                                }
                            }
                            picture {
                                childImageSharp {
                                    fluid {
                                        srcWebp
                                        srcSetWebp
                                    }
                                }
                            }
                        }
                    }
                }
            `).allStrapiShop.nodes.map((article) => {
                return [
                    article.reference,
                    {
                        ...article,
                        'pack_name': (function() {
                            return `${article.pack_size} ${name_table[article.pack_type][article.pack_size == 1 ? 0 : 1]}`;
                        })
                    }]
            })
        )
    );

    const article_base = (ref, qnt) => {
        return {
            'reference': ref,
            'quantity': qnt,
            'pack_size': articles[ref].pack_size,
            'type': articles[ref].pack_type,
            'pack_name': (function() {
                return `${qnt * this.pack_size} ${name_table[this.pack_type][qnt * this.pack_size == 1 ? 0 : 1]}`;
            }),
            'add': (function(qnt) {
                this.quantity+=qnt;
                return this;
            }),
            'remove': (function(qnt) {
                let process = 0;
                this.quantity > qnt && ++process && this.add(0 - qnt);
                this.quantity <= qnt && !process && this.add(0 - this.quantity);
                return this;
            }),
            'is_ref': (function(ref) {return ref == this.reference;}),
            'price': articles[ref].price,
            'discount': articles[ref].discount || 0,
            'total': (function() {return this.price * this.quantity * (1 + this.discount / 100);}),
            'delete': (function() {
                console.log("HARA KIRI KIRI !")
                delete this;
            })
        };
    }

    const [cart, setCart] = React.useState([]);
    const [purchaseOpened, setPurchaseOpened] = React.useState(false);

    const open_purchase = () => {setPurchaseOpened(true);}
    const close_purchase = () => {setPurchaseOpened(false);}
    const toggle_open_purchase = () => {purchaseOpened ? close_purchase() : open_purchase();}

    const article_index = (ref) => {
        return cart.map((item, key) => {
            return item.is_ref(ref) ? key : 0;
        }).reduce((a, b) => {return a + b;});
    }

    const find_article = (ref) => {
        return cart && cart.length && cart.find(item => {
            if(ref == item.reference) {
                return item;
            }
        }) || null;
    }

    const add_article = (ref, qnt) => {
        let temp = find_article(ref), process = 0;
        if(temp) {
            let _cart = new Array(...cart);
            _cart.splice(article_index(ref), 1, temp.add(qnt))
            setCart(_cart)
        }
        else {
            let temp2 = new Array(...cart);
            temp2.push(article_base(ref, qnt));
            setCart(temp2);
        }
    }

    const remove_article = (ref, qnt) => {
        let temp = find_article(ref), process = 0;
        if(temp && temp.quantity <= qnt) {
            delete_article(ref);
        }
        if(temp && temp.quantity > qnt) {
            let _cart = new Array(...cart);
            _cart.splice(article_index(ref), 1, temp.remove(qnt))
            setCart(_cart);
        }
    }

    const delete_article = (ref) => {
        if(cart.length == 1) {
            setCart([]);
        }
        else if(article_index(ref) >= 0) {
            let _cart = new Array(...cart);
            _cart.splice(article_index(ref), 1)
            setCart(_cart);
        }
    }

    const count_total = () => {
        return cart.map((article) => {
            return article.total();
        }).reduce((a, b) => {
            return a + b;
        }, 0);
    };

    return (
        <CartContext.Provider
            value={{
                'articles': articles,
                'cart': cart,
                'find': find_article,
                'add': add_article,
                'remove': remove_article,
                'total': count_total,
                'delete': delete_article,
                'cart_opened': purchaseOpened,
                'open_cart': open_purchase,
                'close_cart': close_purchase,
                'toggle_open_cart': toggle_open_purchase
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;

