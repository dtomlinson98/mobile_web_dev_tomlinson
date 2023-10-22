// mobile sideNav
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

//image slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  height: 650,
  transition: 500,
  interval: 4000,
});

//autocomplete data
const autoComp = document.querySelector(".autocomplete");
M.Autocomplete.init(autoComp, {
  data: {
    "French Bulldog": null,
    "Golden Doodle": null,
    "Labrador Retriever": null,
    "German Shepherd": null,
    Poodle: null,
    Bulldog: null,
    Beagle: null,
    "Yorkshire Terrier": null,
    Boxer: null,
    "Siberian Husky": null,
    Dachshund: null,
    "Shih Tzu": null,
    Rottweiler: null,
    "Great Dane": null,
    Pug: null,
    "Doberman Pinscher": null,
    Chihuahua: null,
    "Golden Retriever": null,
    "Border Collie": null,
    "Australian Shepherd": null,
    "Cocker Spaniel": null,
    "Bernese Mountain Dog": null,
    "Basset Hound": null,
    "Boston Terrier": null,
    Dalmatian: null,
    "Chow Chow": null,
    Greyhound: null,
    "Shetland Sheepdog": null,
    Pomeranian: null,
    "Saint Bernard": null,
    Papillon: null,
  },
});
