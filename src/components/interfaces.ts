// Strapi interfaces
// Collections

export interface InmodePanel_Addon_Interface {
    Name?: string;
    Banner? : InmodePanel_Base_Banner_Interface;
    WhatIs?: InmodePanel_Generic_WhatIs_Interface;
    KeyBenefits?: InmodePanel_Base_Texte_Interface[];
    Videos?: InmodePanel_Addon_Video_Interface[];
    BeforesAfters?: InmodePanel_Generic_BeforeAfter_Interface[];
    WhatTreats?: InmodePanel_Addon_WhatTreat_Interface[];
    ClinicalStudies?: InmodePanel_Generic_ClinicalStudies_Interface[];
    ProductPresentation?: InmodePanel_Addon_ProductPresentation_Interface[];
    Price?: number;
    Products?: InmodePanel_Product_Interface[];
    Page_addon?: boolean;
    BeforeKeyBenefits?: string;
    AfterKeyBenefits?: string;
    SellingArgs?: InmodePanel_Generic_SellingArgs_Interface[];
    SellingNewGeneration?: InmodePanel_Generic_SellingNewGeneration_Interface;
    RelatedAddonTreats?: InmodePanel_Base_RelatedAddonTreat_Interface[];
    MenuParams: InmodePanel_Generic_MenuParams_Interface;
    sensitivity: boolean;
};
export interface InmodePanel_Event_Interface {
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
    addons: InmodePanel_Addon_Interface[];
};
export interface InmodePanel_Menu_Interface {
    title?: string;
    url?: string;
    type?: string;
    variant?: string;
    container?: string;
    products?: InmodePanel_Product_Interface[];
    treatment?: InmodePanel_Treatment_Interface[]
    menus?: InmodePanel_Menu_Interface[];
    parent_menu?: boolean;
    icon?: GatsbyImage_Interface;
    icon_hover?: GatsbyImage_Interface;
    internal_link?: boolean;
    mini_treatments?: InmodePanel_Treatment_Interface[];
    mini_products?: InmodePanel_Product_Interface[];
    mini_addons?: InmodePanel_Addon_Interface[];
};
export interface InmodePanel_Order_Interface {
    Reference?: string | undefined;
    Date: string;
    Article: InmodePanel_Product_BoughtArticle_Interface[];
    Billing: InmodePanel_Order_Billing_Interface;
    Shipping?: InmodePanel_Order_Shipping_Interface;
    Paid: boolean;
    Status: string;
    Firstname: string;
    Lastname: string;
    Society: string;
    DeliveryTax: number;
    Total: string | number;
    SEPA?: boolean;
    Country: string;
    TVA_Intra?: string;
};
export interface InmodePanel_Product_Interface {
    strapiId: number;
    id: number;
    Name: string;
    Banner: InmodePanel_Base_Banner_Interface;
    WhatIs: InmodePanel_Generic_WhatIs_Interface;
    BeforeKeyBenefits: string;
    KeyBenefits: InmodePanel_Base_Texte_Interface[];
    ClinicalStudies: InmodePanel_Generic_ClinicalStudies_Interface[];
    Price: Number 	
    ShopDescription: string;
    Icon: GatsbyImage_Interface;
    Tags: InmodePanel_Tags_Interface[]; // TODO
    Addons: InmodePanel_Addon_Interface[];
    BeforesAfters: InmodePanel_Generic_BeforeAfter_Interface[];
    SellingArgs: InmodePanel_Generic_SellingArgs_Interface[];
    WhatIsProduct: InmodePanel_Product_WhatIsProduct_Interface[];
    Demo: InmodePanel_Generic_Demo_Interface;
    ShopTreats: InmodePanel_Base_Texte_Interface[];
    ShopPicture: GatsbyImage_Interface;
    treatments: InmodePanel_Treatment_Interface[];
    RelatedAddonTreatment: InmodePanel_Product_RelatedAddonTreatment_Interface[];
    MenuParams: InmodePanel_Generic_MenuParams_Interface;
    position: Number;
    short_descr: string;
    sensitivity: boolean;
};
export interface InmodePanel_Shop_Interface {
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
export interface InmodePanel_TagFamily_Interface {
    FamilyName: string;
    tags: InmodePanel_Tags_Interface[];
};
export interface InmodePanel_Tags_Interface {
    tag: string;
    products: InmodePanel_Product_Interface[];
    tag_families: InmodePanel_TagFamily_Interface[];
};
export interface InmodePanel_Treatment_Interface {
    strapiId:number;
    Name?: string;
    WhatIsTreat?: InmodePanel_Generic_WhatIs_Interface;
    Banner?: InmodePanel_Treat_Banner_Interface;
    BeforesAfters?: InmodePanel_Generic_BeforeAfter_Interface[];
    ClinicalStudies?: InmodePanel_Generic_ClinicalStudies_Interface[];
    IncludeTitle?: string;
    IncludeList?: InmodePanel_Base_Texte_Interface[];
    products?: InmodePanel_Product_Interface[];
    MenuParams: InmodePanel_Generic_MenuParams_Interface;
    sensitivity: boolean;
};

// Single types

export interface InmodePanel_AboutUs_Interface {
    banner?: GatsbyImage_Interface;
    about_video_url?: string;
    about_txt?: string;
    learn_bg?: GatsbyImage_Interface | undefined;
    learn_icon?: GatsbyImage_Interface | undefined;
    learn_txts?: InmodePanel_Base_SectionTitreText_Interface[];
    learn_values?: InmodePanel_Base_Texte_Interface[];
    staff?: InmodePanel_Generic_Staff_Interface[];
    menus?: InmodePanel_Menu_Interface[];
};
export interface InmodePanel_Footer_Interface {
    logo: GatsbyImage_Interface | undefined;
    address: string;
    phone: string;
    mail: string;
    social: InmodePanel_Generic_Social_Interface[];
    navigation: InmodePanel_Generic_Navigate_Interface[];
};
export interface InmodePanel_NextGeneration_Inteface {
    picture?: GatsbyImage_Interface;
    title?: string;
    text?: string;
    source?: string;
};
export interface  InmodePanel_SellingArg_Interface {
    picture?: GatsbyImage_Interface;
    title?: string;
    arg?: string;
};
export interface  InmodePanel_SellingNext_Interface {
    picture?: GatsbyImage_Interface;
    title?: string;
    text?: string;
    source?: string;
};

// Components

    

    // Addon
    export interface InmodePanel_Addon_AddonProductDescr_Interface {
        descr?: string;
        product?: InmodePanel_Product_Interface;
    };
    export interface InmodePanel_Addon_ProductPresentation_Interface {
        left_image?: GatsbyImage_Interface;
        title_image?: GatsbyImage_Interface;
        appears_everywhere?: boolean;
        products?: InmodePanel_Product_Interface[];
        ProductPresentationTreats?: InmodePanel_Base_Treat_Interface[];
        Images?: InmodePanel_Base_Image_Interface[];
        AddonProductsDescr?: InmodePanel_Addon_AddonProductDescr_Interface[];
        title_text?: string;
    };
    export interface InmodePanel_Addon_Video_Interface {
        url?: string;
        poster?: GatsbyImage_Interface;
    };
    export interface InmodePanel_Addon_WhatTreat_Interface {
        picture?: GatsbyImage_Interface;
        title?: string;
        text?: string;
    };

    // Base
    export interface InmodePanel_Base_Banner_Interface {
        left_img?: GatsbyImage_Interface;
        right_img?: GatsbyImage_Interface;
        left_video?: string;
        right_text?: string;
        mini?: GatsbyImage_Interface;
    };
    export interface InmodePanel_Base_Image_Interface {
        image?: GatsbyImage_Interface;
        product?: InmodePanel_Product_Interface;
    };
    export interface InmodePanel_Base_RelatedAddonTreat_Interface {
        treat_short?: string;
        product?: InmodePanel_Product_Interface;
        treatment?: InmodePanel_Treatment_Interface;
    };
    export interface InmodePanel_Base_SectionTitreText_Interface {
        title?: string;
        text?: string;
    };
    export interface InmodePanel_Base_Texte_Interface {
        texte?: string;
    };
    export interface InmodePanel_Base_Treat_Interface {
        treat_short?: string;
        product?: InmodePanel_Product_Interface;
    };

    // Generic
    export interface InmodePanel_Generic_BeforeAfter_Interface {
        image?: GatsbyImage_Interface;
        doctor?: string;
        text?: string;
    };
    export interface InmodePanel_Generic_ClinicalStudies_Interface {
        picture: GatsbyImage_Interface;
        title: string;
        url: string;
        author: string;
        published_date: string;
        publication: string;
        addons: InmodePanel_Addon_Interface[];
    };
    export interface InmodePanel_Generic_Customer_Interface {
        Firstname?: string;
        Lastname?: string;
        Mail?: string;
        Phone?: string;
        Society?: string;
        Address?: string;
        Country?: string;
        ZIP?: string;
        City?: string;
    };
    export interface InmodePanel_Generic_Demo_Interface {
        picture?: GatsbyImage_Interface;
        text?: string;
    };
    export interface InmodePanel_Generic_MenuParams_Interface {
        title: string;
        url: string;
        type: string;
        variant: string;
        internal_link: boolean | null;
    };
    export interface InmodePanel_Generic_Navigate_Interface {
        name?: string;
        url?: string;
    };
    export interface InmodePanel_Generic_SellingArgs_Interface {
        SectionTitle?: string;
        Arg?: InmodePanel_Base_Texte_Interface[];
        picture?: GatsbyImage_Interface;
    };
    export interface InmodePanel_Generic_SellingNewGeneration_Interface {
        picture?: GatsbyImage_Interface;
        text?: string;
        source?: string;
        title?: string;
    };
    export interface InmodePanel_Generic_Social_Interface {
        url?: string;
        name?: string;
        icon?: GatsbyImage_Interface;
        position?: number;
    };
    export interface InmodePanel_Generic_Staff_Interface {
        picture?: GatsbyImage_Interface;
        name?: string;
        position?: string;
        short_descr?: string;
    };
    export interface InmodePanel_Generic_WhatIs_Interface {
        picture?: GatsbyImage_Interface;
        TitleText?: InmodePanel_Base_SectionTitreText_Interface[];
    };

    // Order
    export interface InmodePanel_Order_Billing_Interface {
        Firstname?: string;
        Lastname?: string;
        Phone?: string | number;
        Mail?: string;
        Address?: string;
        Country?: string;
        ZIP?: string | number;
        City?: string;
        Society?: string;
    };
    export interface InmodePanel_Order_Shipping_Interface {
        Firstname?: string;
        Lastname?: string;
        Phone?: string | number;
        Mail?: string;
        Address?: string;
        Country?: string;
        ZIP?: string | number;
        City?: string;
        Society?: string;
    };

    // Product
    export interface InmodePanel_Product_BoughtArticle_Interface {
        Article?: number;
        Quantity?: number;
        Price: number;
        Name: string;
        Pack: string;
    };
    export interface InmodePanel_Product_Buyer_Interface {
        Firstname?: string;
        Lastname?: string;
        Phone?: string;
        Address?: string;
        Country?: string;
        ZIP?: string;
        City?: string;
        Society?: string;
    };
    export interface InmodePanel_Product_RelatedAddonTreatment_Interface {
        addon?: InmodePanel_Addon_Interface;
        treatment?: InmodePanel_Treatment_Interface;
        short?: InmodePanel_Base_Texte_Interface;
    };
    export interface InmodePanel_Product_WhatIsProduct_Interface {
        image?: GatsbyImage_Interface;
        title?: string;
        text?: string;
        treatment?: InmodePanel_Treatment_Interface;
    };

    // Treat
    export interface InmodePanel_Treat_Banner_Interface {
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
    intra_tva: string,
    vads_action_mode: string;// "INTERACTIVE"
    vads_amount: string | number;// "86400"
    vads_ctx_mode: string;// "TEST"
    vads_currency: string | number;// 978
    vads_cust_address: string;// "124 Rue de Crimée"
    vads_cust_country?: string;// ""
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
    vads_ship_to_country: string;// ""
    vads_ship_to_zip: string | number;// "13003"
    delivery_mail: string;
    vads_site_id: string | number;// "53371535"
    vads_trans_date: string;// "20210225143539"
    vads_trans_id?: string;// "SLLwPU"
    vads_url_cancel?: string;// "https://www.inmodemd.fr/payment/cancel"
    vads_url_refused?: string;// "https://www.inmodemd.fr/payment/refused"
    vads_url_success?: string;// "https://www.inmodemd.fr/payment/paid"
    vads_product_qty0?: number;// Frais de livraison
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
    formSave: Cart_FormSave_Interface | any;
    formReset():void,
    cartReset():void,
    differentAddress: Boolean,
    hasDifferentShipping(_b:boolean):void,
    getTVAIntra():boolean,
};

export interface Cart_FormSave_Interface {
    vads_cust_title?: string;
    vads_cust_first_name?: string;
    vads_cust_last_name?: string;
    vads_cust_status?: string;
    vads_cust_legal_name?: string;
    vads_cust_address_number?: string;
    vads_cust_address?: string;
    vads_cust_address2?: string;
    vads_cust_zip?: string;
    vads_cust_city?: string;
    vads_cust_state?: string;
    vads_cust_country?: string;
    intra_tva?: string;
    vads_ship?: string;
    vads_ship_to_street_number?: string;
    vads_ship_to_street?: string;
    vads_ship_to_street2?: string;
    vads_ship_to_zip?: string;
    vads_ship_to_city?: string;
    vads_ship_to_state?: string;
    vads_ship_to_country?: string;
    vads_ship_to_first_name?: string;
    vads_ship_to_last_name?: string;
    vads_ship_to_phone_num?: string;
    vads_ship_to_status?: string;
    vads_ship_to_legal_name?: string;
    delivery_mail?: string;
    vads_cust_cell_phone?: string;
    vads_cust_email?: string;
}

export interface PayParams_Interface {
    signature: string;
    actionMode: string;
    vads_ctx_mode: string;
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
    products: InmodePanel_Product_Interface[];
};

export interface MenusContext_Interface {
    header_top: HeaderTop_Interface[];
    header_bottom: HeaderBottom_Interface[];
    footer: InmodePanel_Footer_Interface;
    allStrapiProduct?: InmodePanel_Product_Interface[];
    allStrapiTreatment?: InmodePanel_Treatment_Interface[];
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
    menus: InmodePanel_Menu_Interface[];
    products: {
        id: number;
        position: number;
        MenuParams: InmodePanel_Generic_MenuParams_Interface;
        Icon: GatsbyImage_Interface | undefined;
    }[];
    treatments: {
        id: number;
        MenuParams: InmodePanel_Generic_MenuParams_Interface;
    }[];
    icon: GatsbyImage_Interface | undefined;
    icon_hover: GatsbyImage_Interface | undefined;
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
    menus: InmodePanel_Menu_Interface[];
    products: {
        id: number;
        position: number;
        MenuParams: InmodePanel_Generic_MenuParams_Interface;
        Icon: GatsbyImage_Interface | undefined;
    }[];
    treatments: {
        id: number;
        MenuParams: InmodePanel_Generic_MenuParams_Interface;
    }[];
    mini_treatments: {
        id: number;
        MenuParams: InmodePanel_Generic_MenuParams_Interface;
    }[];
    mini_products: {
        id: number;
        MenuParams: InmodePanel_Generic_MenuParams_Interface;
    }[];
    mini_addons: {
        id: number;
        MenuParams: InmodePanel_Generic_MenuParams_Interface;
    }[];
    icon: GatsbyImage_Interface | undefined;
    icon_hover: GatsbyImage_Interface | undefined;
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