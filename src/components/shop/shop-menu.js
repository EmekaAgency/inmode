import React from "react";
import ShopProduct from "./shop-product";

const ShopMenu = ({ products, tag_families, technologies, special }) => {

  const [tags, setTags] = React.useState([]);
  const [memoryTags, setMemoryTags] = React.useState([]);
  
  const [technology, setTechnology] = React.useState([]);
  const [memoryTechnology, setMemoryTechnology] = React.useState([]);

  const checkbox_resolve_checked_selector = "workstation-filter-checkbox";

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
      console.log("There");
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

  return (
    <div className="workstation-menu">
      <div className="menu">
      {tag_families.map((tag, key) => {
        return (
          <ul key={key} className="menu-title menu-text transition">
            <span
                className="menu-title menu-text"
            >
                {tag.FamilyName}
            </span>
            <ul className="dropdown-menu custom-scrollbar">
                <div className="selection transition">
                  <input
                    id={`${key}-all`}
                    type="checkbox"
                    onClick={(e) => {allResolve(e);}}
                    value="cure-choice"
                    className="cure-choice-all"
                    defaultChecked={true}
                  />
                  <label htmlFor={`${key}-all`}>Tout afficher</label>
                </div>
                {tag.tags && tag.tags.map((sub_tag, key_sub) => {
                    return (
                      <div key={key_sub} className="selection transition">
                        <input
                          id={`${key}-${key_sub}`}
                          type="checkbox"
                          key={key}
                          onClick={(e) => {resolveClick(e);}}
                          value={sub_tag.tag}
                          className={`${checkbox_resolve_checked_selector} cure-choice`}
                        />
                        <label htmlFor={`${key}-${key_sub}`}>{sub_tag.tag}</label>
                      </div>
                    );
                })}
            </ul>
          </ul>
        );
      })}
        <ul className="menu-title menu-text transition">
          <span
              className="menu-title menu-text"
          >
              technologies
          </span>
          <ul className="dropdown-menu custom-scrollbar">
              {technologies.map((techno, key) => {
                  return (
                    <div key={key} className="selection transition">
                      <input
                        id={`tech-${key}`}
                        type="checkbox"
                        key={key}
                        className={`tech-choice`}
                        onClick={(e) => resolve_technology(e)}
                        value={techno.Name}
                      />
                      <label htmlFor={`tech-${key}`}>{techno.Name}</label>
                    </div>
                  );
              })}
          </ul>
        </ul>
      </div>
      <div className={`workstation-products${special ? " special" : ""}`}>
        {products.map((product, key) => {
          // console.log(product.Tags.map(tag => {return tag.tag;}));
          // console.log(tags);
          let filtered_tag = tags.filter(value => product.Tags.map(tag => {return tag.tag;}).includes(value));
          let filtered_tech = technology.filter(value => product.Addons.map(tech => {return tech.Name;}).includes(value));
          filtered_tag.length > 0 && console.log(`${product.Name} has tags`);
          filtered_tech.length > 0 && console.log(`${product.Name} has tech`);
          if((tags == [] || tags.length == 0) && (technology == [] || technology.length == 0)) {
            // console.log(`\n/////////`);
            // console.log(`no tags, default display ${product.Name}`);
            return (
              <ShopProduct key={key} product={product} special={special}/>
            );
          }
          else if(filtered_tag.length > 0 || filtered_tech.length > 0) {
            // console.log(`\n/////////`);
            // console.log(`tags, dynamic display ${product.Name}`);
            console.log(filtered_tag);
            console.log(filtered_tech);
            return (
              <ShopProduct key={key} product={product} special={special}/>
            );
          }
        })}
      </div>
    </div>
  );
}

ShopMenu.propTypes = {

};

ShopMenu.defaultProps = {

}

export default ShopMenu;