import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { useCart } from "../contexts/cart-provider";
import {
    BackAmountField,
    BackPaymentConfigField,
    NbProductsField,
    ProductAmountField,
    ProductLabelField,
    ProductQtyField,
    ProductRefField
} from "../PaymentFields";

const PayParams = ({  }:PayParams) => {

    const cart = useCart();

    const [shop_datas] = React.useState(useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    shop_id
                    url_success
                    url_cancel
                    url_refused
                    url_error
                    url_order_create
                    url_order_load
                    url_order_signature
                }
            }
        }
    `).site.siteMetadata);

    // console.log(shop_datas);

    // console.log(cart.pay);

    React.useEffect(() => {
        cart.init_shop(shop_datas.shop_id, {
            success: shop_datas.url_success,
            cancel: shop_datas.url_cancel,
            refused: shop_datas.url_refused,
            error: shop_datas.url_error,
        },
        {
            create: shop_datas.url_order_create,
            load: shop_datas.url_order_load,
            signature: shop_datas.url_order_signature,
        });
        // console.log(cart.pay);
    }, []);

    // console.log(cart.pay);

    return (
        <>
            <form id="pay_back_params">
                    {/* <BackSignatureField value={cart.pay.signature}/> */}
                {/* <input hidden name="signature" id="signature" value=""/> */}
                    {/* <BackActionModeField value={cart.pay.actionMode}/> */}
                {/* <input hidden name="vads_action_mode" id="vads_action_mode" value=""/> */}
                    {/* <BackCtxModeField value={cart.pay.ctxMode}/> */}
                {/* <input hidden name="vads_ctx_mode" id="vads_ctx_mode" value=""/> */}
                    {/* <BackCurrencyField value={cart.pay.currency}/> */}
                {/* <input hidden name="vads_currency" id="vads_currency" value="978"/> */}
                    {/* <BackPageActionField value={cart.pay.pageAction}/> */}
                {/* <input hidden name="vads_page_action" id="vads_page_action" value=""/> */}
                    {/* <BackSiteIdField value={cart.pay.siteId}/> */}
                {/* <input hidden name="vads_site_id" id="vads_site_id" value=""/> */}
                    {/* <BackTransDateField value={cart.pay.transDate}/> */}
                {/* <input hidden name="vads_trans_date" id="vads_trans_date" value=""/> */}
                    {/* <BackTransIdField value={cart.pay.transId}/> */}
                {/* <input hidden name="vads_trans_id" id="vads_trans_id" value=""/> */}
                    {/* <BackVersionField value={cart.pay.version}/> */}
                {/* <input hidden name="vads_version" id="vads_version" value="V2"/> */}
                    {/* <BackReferenceField value={cart.pay.Reference}/> */}
                {/* <input hidden name="vads_order_id" id="" value=""/> */}
                <BackPaymentConfigField/>
                <BackAmountField value={cart.total_all_included()}/>
                <NbProductsField value={cart.cart.length}/>
                <div id="payment_articles">
                    {/* DELIVERY TAX */}
                    {/*PAS DE FRAIS DE LIVRAISON*/}
                    {false && cart.pay_delivery() && <input hidden id="vads_product_amount0" name="vads_product_amount0" value="1000"/>}
                    {false && cart.pay_delivery() && <input hidden id="vads_product_label0" name="vads_product_label0" value="livraison"/>}
                    {false && cart.pay_delivery() && <input hidden id="vads_product_qty0" name="vads_product_qty0" value="1"/>}
                    {false && cart.pay_delivery() && <input hidden id="vads_product_ref0" name="vads_product_ref0" value="DELIVERY_TAX"/>}
                    {/*FRAIS DE LIVRAISON*/}
                    {/* {cart.pay_delivery() && <input hidden id="vads_product_amount0" name="vads_product_amount0" value="1000"/>} */}
                    {/* {cart.pay_delivery() && <input hidden id="vads_product_label0" name="vads_product_label0" value="livraison"/>} */}
                    {/* {cart.pay_delivery() && <input hidden id="vads_product_qty0" name="vads_product_qty0" value="1"/>} */}
                    {/* {cart.pay_delivery() && <input hidden id="vads_product_ref0" name="vads_product_ref0" value="DELIVERY_TAX"/>} */}
                    {/* TVA */}
                    <input hidden id="vads_product_amount9999" name="vads_product_amount9999" defaultValue={Math.ceil(parseInt(cart.total_tva(), 10) * 100)}/>
                    <input hidden id="vads_product_label9999" name="vads_product_label9999" defaultValue="tva"/>
                    <input hidden id="vads_product_qty9999" name="vads_product_qty9999" defaultValue="1"/>
                    <input hidden id="vads_product_ref9999" name="vads_product_ref9999" defaultValue="TVA"/>
                    {cart.cart.length ? cart.cart.map((article, key) => {
                        return (
                            <div id={`${article.reference}-pay_params`} key={key}>
                                <ProductLabelField index={article.id} value={article.name}/>
                                <ProductAmountField index={article.id} value={Math.ceil(article.price * 100)}/>
                                <ProductRefField index={article.id} value={article.reference}/>
                                <ProductQtyField index={article.id} value={article.quantity}/>
                            </div>
                        );
                    }).filter(elem => elem) : ''}
                </div>
            </form>
            <form id="payment_form"></form>
        </>
    );
};

interface PayParams {

};

export default PayParams;