export const state = () => ({

  mainMenu: [
    {
      name: "about",
      to: "/about/overview",
    },
    {
      name: "resources",
      to: "/resources/library/search",
    },
    {
      name: "setup",
      to: "/setup",
    },
    {
      name: "tools",
      to: "/tools",
    },
    {
      name: "help",
      to: "/help",
    },
  ],

  about: [
    {
      name: "overview",
      to: "/about/overview",
      iconClass: "",
      subsubnav: [
        {name: "history", to: "/about/overview/history"},
        {name: "constitution", to: "/about/overview/constitution"},
      ],
    },
    {
      name: "people",
      to: "/about/people",
      iconClass: "",
      subsubnav: [
        {name: "board", to: "/about/people/board"},
        {name: "affiliates", to: "/about/people/affiliates"},
        {name: "staff", to: "/about/people/staff"},
      ],
    },
    {
      name: "groups",
      to: "/about/groups",
      iconClass: "",
      subsubnav: [
        {
          name: "committees",
          to: "/about/groups/committees",
        },
        {
          name: "councils",
          to: "/about/groups/councils"
        },
      ],
    },
  ],

})
