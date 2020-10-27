import React from "react";
import WorkstationProduct from "./workstation-product";
import ShopProduct from "./shop-product";
import ShopProduct2 from "./shop-product2";
import CartContext from "../contexts/cart-context";
import CartProvider from "../contexts/cart-provider";
import { resolve_tab_link_selected } from "../../functions/resolve_mini_menu_opened";
import WorkstationMenu from "./workstation-menu";
import ShopMenu from "./shop-menu";

const Shop = ({ products, tag_families, technologies, special, shop_card }) => {

  const [tags, setTags] = React.useState([]);
  const [memoryTags, setMemoryTags] = React.useState([]);
  
  const [technology, setTechnology] = React.useState([]);
  const [memoryTechnology, setMemoryTechnology] = React.useState([]);

  const checkbox_resolve_checked_selector = "shopping-menu-filter-checkbox";

  const resolve_checked = (value, remove = true, classname = checkbox_resolve_checked_selector) => {
    let list = document.getElementsByClassName(classname);
    Object.keys(list).map(elem => {
      if(remove) {
        if(list[elem].value == value && list[elem].checked == true) {
          list[elem].checked = false;
        }
      }
      else {
        if(list[elem].value == value && list[elem].checked == false) {
          list[elem].checked = true;
        }
      }
    })
  }

  const resolveClick = (e) => {
    let temp = new Array(...tags);
    if(e.currentTarget.checked) {
      resolve_checked('cure-choice', true, 'cure-choice-all');
      resolve_checked(e.currentTarget.value, false);
      temp.push(e.currentTarget.value);
    }
    else {
      resolve_checked(e.currentTarget.value, true);
      temp = temp.map(tag => {
        if(tag != e.currentTarget.value){
          return tag;
        }
        return null;
      }).filter(tag => tag) || [];
    }
    if(temp == [] || temp.length == 0) {
      resolve_checked('cure-choice', false, 'cure-choice-all');
    }
    setTags(temp);
    setMemoryTags(temp);
  }

  const allResolve = (e) => {
    if(e.currentTarget.checked) {
      setMemoryTags([...tags]);
      resolve_checked('cure-choice', false, 'cure-choice-all');
      let elems = document.getElementsByClassName(e.currentTarget.value);
      Object.keys(elems).forEach(index => {
        elems[index].checked = false;
        resolve_checked(elems[index].value);
      });
      // document.getElementsByClassName(e.currentTarget.value).map(elem => elem.checked = false);
      setTags([]);
    }
    else {
      resolve_checked('cure-choice', true, 'cure-choice-all');
      if(memoryTags.length > 0) {
        setTags(memoryTags);
        memoryTags.map(tag => resolve_checked(tag, false));
      }
      else {
        let elems = document.getElementsByClassName('cure-choice');
        let temp = [];
        Object.keys(elems).forEach(index => {
          elems[index].checked = true;
          temp.push(elems[index].value);
          resolve_checked(elems[index].value);
        });
        setTags(temp);
      }
    }
  }

  const resolve_technology = (e) => {
    let temp = new Array(...technology);
    if(e.currentTarget.checked) {
      temp.push(e.currentTarget.value);
    }
    else {
      temp = temp.map(tech => {
        if(tech != e.currentTarget.value){
          return tech;
        }
        return null;
      }).filter(tech => tech) || [];
    }
    setTechnology(temp);
    setMemoryTechnology(temp);
  }

  const filter = (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle('selected');
    let temp = new Array(...tags);
    if(tags.indexOf(e.currentTarget.dataset.value) < 0) {
      temp.push(e.currentTarget.dataset.value);
    }
    else {
      temp = temp.map((tag) => {
        if(e.currentTarget.dataset.value == tag) {
          return false;
        }
        return tag;
      }).filter(tag => tag);
    }
    setTags(temp);
  }

  return (
    <div className={`shopping-menu main-container ${shop_card}`}>
      <div className="menu">
         {shop_card == "workstation" && <WorkstationMenu
          tag_families={tag_families}
          technologies={technologies}
          allResolve={allResolve}
          resolveClick={resolveClick}
          checkbox_resolve_checked_selector={checkbox_resolve_checked_selector}
          resolve_technology={resolve_technology}
        />}
         {shop_card == "shop" && <ShopMenu products={products} filter={filter}/>}
      </div>
      <div className={`${shop_card}-products${special ? " special" : ""}`}>
        {/* ///////////////////////////////////////// */}
        {shop_card == "workstation" && products.map((product, key) => {
          // console.log(product.Tags.map(tag => {return tag.tag;}));
          // console.log(tags);
          let filtered_tag = [];
          let filtered_tech = [];
          if(shop_card == 'workstation') {
            filtered_tag = tags.filter(value => product.Tags.map(tag => {return tag.tag;}).includes(value));
            filtered_tech = technology.filter(value => product.Addons.map(tech => {return tech.Name;}).includes(value));
            filtered_tag.length > 0 && console.log(`${product.Name} has tags`);
            filtered_tech.length > 0 && console.log(`${product.Name} has tech`);
          }
          if(
            (tags == [] || tags.length == 0) && (technology == [] || technology.length == 0)
            ||
            filtered_tag.length > 0 || filtered_tech.length > 0
            ) {
              // console.log(`\n/////////`);
              // console.log(`no tags, default display ${product.Name}`);
              // console.log(`\n/////////`);
              // console.log(`tags, dynamic display ${product.Name}`);
              // console.log(filtered_tag);
            // console.log(filtered_tech);
            return (
              <WorkstationProduct key={key} product={product} special={special}/>
              );
            }
          })}
          {/* ///////////////////////////////////////// */}
          {shop_card == "shop" && products.map((group, group_key) => {
            if(tags.length == 0 || tags.indexOf(group.fieldValue) >= 0) {
              return (
                <div key={group_key} className="shop-addon">
                  <div className="addon-name">{group.fieldValue}</div>
                  {group.nodes.map((product, key) => {
                    return (
                        <ShopProduct2 key={`${group_key}-${key}`} reference={product.reference} special={special}/>
                    );
                  })}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

Shop.propTypes = {

};

Shop.defaultProps = {

}

export default Shop;