# Read more about app structure at http://docs.appgyver.com

module.exports =

# See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: ""
      id: "aqi"
      location: "pages#aqi" # Supersonic module#view type navigation
    }
    {
      title: ""
      id: "alerts"
      location: "settings#alerts"
    }
    {
      title: ""
      id: "social"
      location: "pages#social" # URLs are supported!
    }
#    {
#      title: ""
#      id: "report"
#      location: "pages#report" # URLs are supported!
#    }
  ]

  initialView:
    id: "home"
    location: "home#index"

  preloads: [
    {
      id: "legend"
      location: "pages#legend"
    }
  ]

#rootView:
#  location: "home#index"

# drawers:
#   left:
#     id: "leftDrawer"
#     location: "example#drawer"
#     showOnAppLoad: false
#   options:
#     animation: "swingingDoor"
#

