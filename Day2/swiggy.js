import React from "react";
import ReactDOM from "react-dom/client";

//Inthis im using
/* 
->Swiggy data JSON data props 
->Map
->Key provide 
->Cloudinary se img data access
*/

//Low level planning
/* 
-Header
    -Logo
    -nav items 
-Body
    -Search
    -Res container
    -Res cards
-Footer
    -Copyright
    -Address
    -Many more
*/

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "817359",
          name: "Zahra Restaurant & Cafe",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/81a08241-7cdf-4c95-85a3-aa5093c10888_817359 (1).jpg",
          locality: "Old Delhi",
          areaName: "Jama Masjid",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Mughlai", "North Indian", "Snacks"],
          avgRating: 4.3,
          parentId: "229129",
          avgRatingString: "4.3",
          totalRatingsString: "1.7K+",
          promoted: true,
          adTrackingId:
            "cid=f006c5a6-1525-4724-b8cf-7a88be683a04~p=0~adgrpid=f006c5a6-1525-4724-b8cf-7a88be683a04#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=817359~plpr=COLLECTION~eid=0ed4ce6b-6474-44e4-8912-04c205ade953~srvts=1752854879000~collid=83639",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 2.3,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-18 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "f006c5a6-1525-4724-b8cf-7a88be683a04",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=817359&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "908488",
          name: "Biryani Blues",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/3/4212e047-b31c-4448-bc23-c2330abeeb37_f81c1236-0b5f-4b60-b220-7722c3878f3c.jpg",
          locality: "Chandni Chowk",
          areaName: "Old Delhi",
          costForTwo: "₹400 for two",
          cuisines: ["Biryani", "Hyderabadi"],
          avgRating: 4.2,
          parentId: "13813",
          avgRatingString: "4.2",
          totalRatingsString: "397",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-18 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹159",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.8",
              ratingCount: "109",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=908488&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "17835",
          name: "Behrouz Biryani",
          cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
          locality: "Minto Road",
          areaName: "Gandhi Market, Minto Road",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.3,
          parentId: "1803",
          avgRatingString: "4.3",
          totalRatingsString: "9.0K+",
          promoted: true,
          adTrackingId:
            "cid=31215057~p=1~adgrpid=31215057#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=17835~plpr=COLLECTION~eid=663d0966-e5ab-4eaa-80b5-df0e06e462a4~srvts=1752854879000~collid=83639",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 5.8,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "5.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-18 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31215057",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=17835&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "984059",
          name: "Tunday Kababi - Since 1905",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/11/6/80f21959-c68f-430b-81b7-95ddc6983196_f362b454-1f71-41ae-b858-46f08238a602.jpg",
          locality: "Old Delhi",
          areaName: "Old Delhi",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Mughlai"],
          avgRating: 4.3,
          parentId: "482905",
          avgRatingString: "4.3",
          totalRatingsString: "265",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-18 22:50:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=984059&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "944228",
          name: "House of Biryan- Biryani, Kepsa and More",
          cloudinaryImageId: "wuxugfyrcvsnduwve7ss",
          locality: "Connaught Place",
          areaName: "Connaught Place",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Kebabs", "Rolls"],
          avgRating: 4.2,
          parentId: "385250",
          avgRatingString: "4.2",
          totalRatingsString: "466",
          promoted: true,
          adTrackingId:
            "cid=f519acf8-6604-4a95-a13c-2fc65cf99018~p=3~adgrpid=f519acf8-6604-4a95-a13c-2fc65cf99018#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=944228~plpr=COLLECTION~eid=05c6c7c3-c66a-4186-806b-f7aea9be65a8~srvts=1752854879000~collid=83639",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-18 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "f519acf8-6604-4a95-a13c-2fc65cf99018",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=944228&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "722498",
          name: "A One Shama Biryani",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/10/f3a3814d-dae7-40e7-a9aa-e1c6614f5bfd_055c3c02-0bf0-4e0d-999e-390cfcf3d531.JPG",
          locality: "H.C. Sen Raod",
          areaName: "Old Delhi",
          costForTwo: "₹250 for two",
          cuisines: ["Biryani", "Indian"],
          parentId: "430196",
          avgRatingString: "--",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 1.2,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-18 22:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "5.0",
              ratingCount: "<3",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=722498&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "866926",
          name: "Food Of Dreams By Punjabi Angithi",
          cloudinaryImageId: "f7711ebf2f1f668cf691a2a53e28ca40",
          locality: "Patparganj Rd",
          areaName: "Laxmi Nagar",
          costForTwo: "₹300 for two",
          cuisines: ["Chinese"],
          avgRating: 4.2,
          veg: true,
          parentId: "585190",
          avgRatingString: "4.2",
          totalRatingsString: "491",
          promoted: true,
          adTrackingId:
            "cid=6bfdc014-fabb-4ede-8934-3ac74cc6c3b4~p=4~adgrpid=6bfdc014-fabb-4ede-8934-3ac74cc6c3b4#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=866926~plpr=COLLECTION~eid=01b1f7a0-6319-4a50-9d61-c7c9bc8f5fec~srvts=1752854879000~collid=83639",
          sla: {
            deliveryTime: 44,
            lastMileTravel: 7.6,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "7.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-19 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹149",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "6bfdc014-fabb-4ede-8934-3ac74cc6c3b4",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=866926&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

//header component
const Header = () => {
  return (
    <div className="headerCon">
      <div className="headerLogo">
        <img
          alt="headerLogo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="headerList">
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Location</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Rcard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } =
    resData?.card?.card?.info;
  return (
    <div className="rcard">
      <img
        alt="headerLogo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="RestCon">
      {resList.map((data) => {
        return <Rcard key={data?.card?.card?.info?.id} resData={data} />
      })}
    </div>
  );
};
//Highest level component
const Page = () => {
  return (
    <div id="page">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
