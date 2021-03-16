// Strapi interfaces
// Collections

export interface Strapi_Addon_Interface {
    Name?: string;
    Banner? : Strapi_Base_Banner_Interface;
    WhatIs?: Strapi_Generic_WhatIs_Interface;
    KeyBenefits?: Strapi_Base_Texte_Interface[];
    Videos?: Strapi_Addon_Video_Interface[];
    BeforesAfters?: Strapi_Generic_BeforeAfter_Interface[];
    WhatTreats?: Strapi_Addon_WhatTreat_Interface[];
    ClinicalStudies?: Strapi_Generic_ClinicalStudies_Interface[];
    ProductPresentation?: Strapi_Addon_ProductPresentation_Interface[];
    Price?: number;
    Products?: Strapi_Product_Interface[];
    Page_addon?: boolean;
    BeforeKeyBenefits?: string;
    AfterKeyBenefits?: string;
    SellingArgs?: Strapi_Generic_SellingArgs_Interface[];
    SellingNewGeneration?: Strapi_Generic_SellingNewGeneration_Interface;
    RelatedAddonTreats?: Strapi_Base_RelatedAddonTreat_Interface[];
    MenuParams: Strapi_Generic_MenuParams_Interface;
    sensitivity: boolean;
};
export interface Strapi_Event_Interface {
    picture: GatsbyImage_Interface;
    title: string;
    short_descr: string;
    address: string;
    video_url: string;
    begin: string;
    finish: string;
    type: string;
    place: string;
    place_url: string;
    maps_link: string;
    addons: Strapi_Addon_Interface[];
};
export interface Strapi_Menu_Interface {
    title?: string;
    url?: string;
    type?: string;
    variant?: string;
    container?: string;
    products?: Strapi_Product_Interface[];
    treatment: Strapi_Treatment_Interface[]
    menus?: Strapi_Menu_Interface[];
    parent_menu?: boolean;
    icon?: GatsbyImage_Interface;
    icon_hover?: GatsbyImage_Interface;
    internal_link?: boolean;
    mini_treatments?: Strapi_Treatment_Interface[];
    mini_products?: Strapi_Product_Interface[];
    mini_addons?: Strapi_Addon_Interface[];
};
export interface Strapi_Order_Interface {
    Reference?: string | undefined;
    Date?: string;
    Article?: Strapi_Product_BoughtArticle_Interface[];
    Billing?: Strapi_Order_Billing_Interface;
    Shipping?: Strapi_Order_Shipping_Interface;
    Paid?: boolean;
    Status?: string;
    Firstname?: string;
    Lastname?: string;
    Society?: string;
    DeliveryTax?: number;
};
export interface Strapi_Product_Interface {
    strapiId: number;
    Name: string;
    Banner: Strapi_Base_Banner_Interface;
    WhatIs: Strapi_Generic_WhatIs_Interface;
    BeforeKeyBenefits: string;
    KeyBenefits: Strapi_Base_Texte_Interface[];
    ClinicalStudies: Strapi_Generic_ClinicalStudies_Interface[];
    Price: Number 	
    ShopDescription: string;
    Icon: GatsbyImage_Interface;
    Tags: Strapi_Tags_Interface[]; // TODO
    Addons: Strapi_Addon_Interface[];
    BeforesAfters: Strapi_Generic_BeforeAfter_Interface[];
    SellingArgs: Strapi_Generic_SellingArgs_Interface[];
    WhatIsProduct: Strapi_Product_WhatIsProduct_Interface[];
    Demo: Strapi_Generic_Demo_Interface;
    ShopTreats: Strapi_Base_Texte_Interface[];
    ShopPicture: GatsbyImage_Interface;
    treatments: Strapi_Treatment_Interface[];
    RelatedAddonTreatment: Strapi_Product_RelatedAddonTreatment_Interface[];
    MenuParams: Strapi_Generic_MenuParams_Interface;
    position: Number;
    short_descr: string;
    sensitivity: boolean;
};
export interface Strapi_Shop_Interface {
    strapiId?: number;
    reference?: string;
    Name?: string;
    pack_size?: number;
    pack_type?: string;
    price?: number;
    discount?: number;
    picture?: GatsbyImage_Interface;
    relative?: string;
};
export interface Strapi_TagFamily_Interface {
    FamilyName: string;
    tags: Strapi_Tags_Interface[];
};
export interface Strapi_Tags_Interface {
    tag: string;
    products: Strapi_Product_Interface[];
    tag_families: Strapi_TagFamily_Interface[];
};
export interface Strapi_Treatment_Interface {
    strapiId:number;
    Name?: string;
    WhatIsTreat?: Strapi_Generic_WhatIs_Interface;
    Banner?: Strapi_Treat_Banner_Interface;
    BeforesAfters?: Strapi_Generic_BeforeAfter_Interface[];
    ClinicalStudies?: Strapi_Generic_ClinicalStudies_Interface[];
    IncludeTitle?: string;
    IncludeList?: Strapi_Base_Texte_Interface[];
    products?: Strapi_Product_Interface[];
    MenuParams: Strapi_Generic_MenuParams_Interface;
    sensitivity: boolean;
};

// Single types

export interface Strapi_AboutUs_Interface {
    banner?: GatsbyImage_Interface;
    about_video_url?: string;
    about_txt?: string;
    learn_bg?: GatsbyImage_Interface | null;
    learn_icon?: GatsbyImage_Interface | null;
    learn_txts?: Strapi_Base_SectionTitreText_Interface[];
    learn_values?: Strapi_Base_Texte_Interface[];
    staff?: Strapi_Generic_Staff_Interface[];
    menus?: Strapi_Menu_Interface[];
};
export interface Strapi_Footer_Interface {
    logo: GatsbyImage_Interface | null;
    address: string;
    phone: string;
    mail: string;
    social: Strapi_Generic_Social_Interface[];
    navigation: Strapi_Generic_Navigate_Interface[];
};
export interface Strapi_NextGeneration_Inteface {
    picture?: GatsbyImage_Interface;
    title?: string;
    text?: string;
    source?: string;
};
export interface  Strapi_SellingArg_Interface {
    picture?: GatsbyImage_Interface;
    title?: string;
    arg?: string;
};
export interface  Strapi_SellingNext_Interface {
    picture?: GatsbyImage_Interface;
    title?: string;
    text?: string;
    source?: string;
};

// Components

    

    // Addon
    export interface Strapi_Addon_AddonProductDescr_Interface {
        descr?: string;
        product?: Strapi_Product_Interface;
    };
    export interface Strapi_Addon_ProductPresentation_Interface {
        left_image?: GatsbyImage_Interface;
        title_image?: GatsbyImage_Interface;
        appears_everywhere?: boolean;
        products?: Strapi_Product_Interface[];
        ProductPresentationTreats?: Strapi_Base_Treat_Interface[];
        Images?: Strapi_Base_Image_Interface[];
        AddonProductsDescr?: Strapi_Addon_AddonProductDescr_Interface[];
        title_text?: string;
    };
    export interface Strapi_Addon_Video_Interface {
        url?: string;
        poster?: GatsbyImage_Interface;
    };
    export interface Strapi_Addon_WhatTreat_Interface {
        picture?: GatsbyImage_Interface;
        title?: string;
        text?: string;
    };

    // Base
    export interface Strapi_Base_Banner_Interface {
        left_img?: GatsbyImage_Interface;
        right_img?: GatsbyImage_Interface;
        left_video?: string;
        right_text?: string;
        mini?: GatsbyImage_Interface;
    };
    export interface Strapi_Base_Image_Interface {
        image?: GatsbyImage_Interface;
        product?: Strapi_Product_Interface;
    };
    export interface Strapi_Base_RelatedAddonTreat_Interface {
        treat_short?: string;
        product?: Strapi_Product_Interface;
        treatment?: Strapi_Treatment_Interface;
    };
    export interface Strapi_Base_SectionTitreText_Interface {
        title?: string;
        text?: string;
    };
    export interface Strapi_Base_Texte_Interface {
        texte?: string;
    };
    export interface Strapi_Base_Treat_Interface {
        treat_short?: string;
        product?: Strapi_Product_Interface;
    };

    // Generic
    export interface Strapi_Generic_BeforeAfter_Interface {
        image?: GatsbyImage_Interface;
        doctor?: string;
        text?: string;
    };
    export interface Strapi_Generic_ClinicalStudies_Interface {
        picture: GatsbyImage_Interface;
        title: string;
        url: string;
        author: string;
        published_date: string;
        publication: string;
        addons: Strapi_Addon_Interface[];
    };
    export interface Strapi_Generic_Customer_Interface {
        Firstname?: string;
        Lastname?: string;
        Mail?: string;
        Phone?: string;
        Society?: string;
        Address1?: string;
        Address2?: string;
        ZIP?: string;
        City?: string;
    };
    export interface Strapi_Generic_Demo_Interface {
        picture?: GatsbyImage_Interface;
        text?: string;
    };
    export interface Strapi_Generic_MenuParams_Interface {
        title: string;
        url: string;
        type: string;
        variant: string;
        internal_link: boolean | null;
    };
    export interface Strapi_Generic_Navigate_Interface {
        name?: string;
        url?: string;
    };
    export interface Strapi_Generic_SellingArgs_Interface {
        SectionTitle?: string;
        Arg?: Strapi_Base_Texte_Interface[];
        picture?: GatsbyImage_Interface;
    };
    export interface Strapi_Generic_SellingNewGeneration_Interface {
        picture?: GatsbyImage_Interface;
        text?: string;
        source?: string;
        title?: string;
    };
    export interface Strapi_Generic_Social_Interface {
        url?: string;
        name?: string;
        icon?: GatsbyImage_Interface;
        position?: number;
    };
    export interface Strapi_Generic_Staff_Interface {
        picture?: GatsbyImage_Interface;
        name?: string;
        position?: string;
        short_descr?: string;
    };
    export interface Strapi_Generic_WhatIs_Interface {
        picture?: GatsbyImage_Interface;
        TitleText?: Strapi_Base_SectionTitreText_Interface[];
    };

    // Order
    export interface Strapi_Order_Billing_Interface {
        Firstname?: string;
        Lastname?: string;
        Phone?: string | number;
        Mail?: string;
        Address1?: string;
        Address2?: string;
        ZIP?: string | number;
        City?: string;
        Society?: string;
    };
    export interface Strapi_Order_Shipping_Interface {
        Firstname?: string;
        Lastname?: string;
        Phone?: string | number;
        // Mail?: string;
        Address1?: string;
        Address2?: string;
        ZIP?: string | number;
        City?: string;
        Society?: string;
    };

    // Product
    export interface Strapi_Product_BoughtArticle_Interface {
        Article?: Strapi_Shop_Interface;
        Quantite?: number;
    };
    export interface Strapi_Product_Buyer_Interface {
        Firstname?: string;
        Lastname?: string;
        Phone?: string;
        Address1?: string;
        Address2?: string;
        ZIP?: string;
        City?: string;
        Society?: string;
    };
    export interface Strapi_Product_RelatedAddonTreatment_Interface {
        addon?: Strapi_Addon_Interface;
        treatment?: Strapi_Treatment_Interface;
        short?: Strapi_Base_Texte_Interface;
    };
    export interface Strapi_Product_WhatIsProduct_Interface {
        image?: GatsbyImage_Interface;
        title?: string;
        text?: string;
        treatment?: Strapi_Treatment_Interface;
    };

    // Treat
    export interface Strapi_Treat_Banner_Interface {
        picture?: GatsbyImage_Interface;
        text?: string;
    };

///////////////////////

export interface ArticleList {
    articles: Article_Interface[];
};

export interface Article_Interface {
    id: number;
    name: string;
    reference: string;
    quantity: number;
    pack_size: number;
    type: string;
    pack_name():string;
    add(qnt:number):Article_Interface;
    remove(qnt:number):Article_Interface;
    is_ref(ref:string):boolean;
    price: number;
    discount: number;
    total():number;
};

export interface NameTable_Interface {
    tip: string[];
    canule: string[];
    kit: string[];
    pin: string[];
    unite: string[];
};

export interface SogecommerceOrder {
    signature: string;// "szb8I5l+avSYQQ0qWq8E8FhI6WGiAOOOsbo9iyk7uIs="
    vads_action_mode: string;// "INTERACTIVE"
    vads_amount: string | number;// "86400"
    vads_ctx_mode: string;// "TEST"
    vads_currency: string | number;// 978
    vads_cust_address: string;// "124 Rue de Crimée"
    vads_cust_address2?: string;// ""
    vads_cust_cell_phone: string | number;// "0667630604"
    vads_cust_city: string;// "Marseille"
    vads_cust_email: string;// "mael.fallet@gmail.com"
    vads_cust_first_name: string;// "Maël"
    vads_cust_last_name: string;// "FALLET"
    vads_cust_legal_name: string;// "Emeka"
    vads_cust_zip: string | number;// "13003"
    vads_nb_products: string | number;// "2"
    vads_order_id?: string;// "SLLwPU"
    vads_page_action: string;// "PAYMENT"
    vads_payment_config: string;// "SINGLE"
    // vads_product_amount23: | number string;// "36000"
    // vads_product_amount25: | number string;// "18000"
    // vads_product_amount9999: | number string;// "14400"
    // vads_product_label23: string;// "HP L10 D18 Type 06 FaceTite"
    // vads_product_label25: string;// "HP L17 D25 Type 03 CelluTite"
    // vads_product_label9999: string;// "tva"
    // vads_product_qty23: | number string;// "1"
    // vads_product_qty25: | number string;// "2"
    // vads_product_qty9999: | number string;// "1"
    // vads_product_ref23: string;// "HP101806A"
    // vads_product_ref25: string;// "HP172503A"
    // vads_product_ref9999: string;// "TVA"
    vads_return_mode?: string;// "POST"
    vads_ship_to_city: string;// "Marseille"
    vads_ship_to_first_name: string;// "Kévin"
    vads_ship_to_last_name: string;// "LESIEUTRE"
    vads_ship_to_legal_name: string;// "Emeka"
    vads_ship_to_phone_num: string | number;// "0769818682"
    vads_ship_to_street: string;// "124 Rue de Crimée"
    vads_ship_to_street2: string;// ""
    vads_ship_to_zip: string | number;// "13003"
    vads_site_id: string | number;// "53371535"
    vads_trans_date: string;// "20210225143539"
    vads_trans_id?: string;// "SLLwPU"
    vads_url_cancel?: string;// "https://www.inmode.emeka.fr/payment/cancel"
    vads_url_refused?: string;// "https://www.inmode.emeka.fr/payment/refused"
    vads_url_success?: string;// "https://www.inmode.emeka.fr/payment/paid"
    vads_product_qty9999?: number;
    vads_version: string;// "V2"
};

export interface Cart_Interface {
    articles: any;
    article(ref:string):Article_Interface | undefined | null;
    cart: Article_Interface[];
    find(ref:string):Article_Interface | undefined | null;
    add(ref:string, qnt:number):void;
    remove(ref:string, qnt:number):void;
    total():number;
    delivery_tax():string;
    total_base():string;
    total_tva():string;
    total_all_included():string;
    pay_delivery():boolean;
    delete(ref:string):void;
    cart_opened: boolean;
    open_cart():void;
    close_cart():void;
    toggle_open_cart():void;
    appeared: boolean;
    redirectPay(form_fields:any, sepa:Boolean):Promise<boolean | void>;
    pay: PayParams_Interface;
    init_shop(shop_id:string, urls:{success: string, cancel: string, refused: string, error: string}, order_urls:{create: string, load:string, signature:string}):Promise<void>;
    updateForm(e:Event | any):void;
    total_articles():number;
    formSave: any;
    formReset():void,
    cartReset():void,
};

export interface PayParams_Interface {
    signature: string;
    actionMode: string;
    ctxMode: string;
    currency: number;
    pageAction: string;
    siteId: string;
    transDate: string;
    transId: string;
    version: string;
    Reference: string;
    url_success: string;
    url_cancel: string;
    url_refused: string;
    url_error: string;
    order_create: string;
    order_load: string;
    order_signature: string;
};

export interface Images_Interface {
    getOne(request:string):GatsbyImage_Interface;
    getSet(request:string[]):GatsbyImage_Interface;
};

export interface GatsbyImage_Interface {
    childImageSharp: {
        fixed: {
            base64?: string;
            srcWebp?: string;
            srcSetWebp?: string;
        }
        fluid: {
            base64?: string;
            srcWebp?: string;
            srcSetWebp?: string;
        }
    }
    publicURL?: string;
    url?: string;
    base64?: string;
    srcWebp?: string;
    srcSetWebp?: string;
};

export interface ProductsContext_Interface {
    product_navigation: {
        name: string;
        url: string;
    }[];
    addon_navigation: {
        name: string;
        url: string;
    }[];
    products: Strapi_Product_Interface[];
};

export interface MenusContext_Interface {
    header_top: HeaderTop_Interface[];
    header_bottom: HeaderBottom_Interface[];
    footer: Strapi_Footer_Interface;
    allStrapiProduct?: Strapi_Product_Interface[];
    allStrapiTreatment?: Strapi_Treatment_Interface[];
};

export interface HeaderTop_Interface {
    strapiId: number;
    title: string;
    url: string;
    type: string;
    variant: string;
    container: string;
    parent_menu: boolean;
    internal_link: boolean | null;
    menus: Strapi_Menu_Interface[];
    products: {
        id: number;
        position: number;
        MenuParams: Strapi_Generic_MenuParams_Interface;
        Icon: GatsbyImage_Interface | null;
    }[];
    treatments: {
        id: number;
        MenuParams: Strapi_Generic_MenuParams_Interface;
    }[];
    icon: GatsbyImage_Interface | null;
    icon_hover: GatsbyImage_Interface | null;
};

export interface HeaderBottom_Interface {
    strapiId: number;
    title: string;
    url: string;
    type: string;
    variant: string;
    container: string;
    parent_menu: boolean;
    internal_link: boolean | null;
    menus: Strapi_Menu_Interface[];
    products: {
        id: number;
        position: number;
        MenuParams: Strapi_Generic_MenuParams_Interface;
        Icon: GatsbyImage_Interface | null;
    }[];
    treatments: {
        id: number;
        MenuParams: Strapi_Generic_MenuParams_Interface;
    }[];
    mini_treatments: {
        id: number;
        MenuParams: Strapi_Generic_MenuParams_Interface;
    }[];
    mini_products: {
        id: number;
        MenuParams: Strapi_Generic_MenuParams_Interface;
    }[];
    mini_addons: {
        id: number;
        MenuParams: Strapi_Generic_MenuParams_Interface;
    }[];
    icon: GatsbyImage_Interface | null;
    icon_hover: GatsbyImage_Interface | null;
};

export interface FlickityOptions_Interface {
    initialIndex?: number;
    cellAlign?: string;
    pageDots?: boolean;
    accessibility?: boolean;
    selectedAttraction?: number;
    friction?: number;
    percentPosition?: boolean;
    autoPlay?: boolean;
    wrapAround?: any;
};