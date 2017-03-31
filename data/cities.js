// List of municipalities in BC, sorted by population (highest to lowest)
// Perhaps search frequency could be sorted into tiers:
//
// Tier 1: 1 - 50;      (Vancouver to North Saanich)
//                      Search once/day
//
// Tier 2:  51 - 100;   (Sidney to Port McNeill)
//                      Search once/week
//
// Tier 3: 101 - 158    (Sicamous to Zeballos)
//                      Search once/month


const cities =
[
  `Vancouver`, `Surrey`, `Burnaby`, `Richmond`, `Langley`, `Coquitlam`,
  `Abbotsford`, `North Vancouver`, `Kelowna`, `Saanich`, `Delta`, `Nanaimo`,
  `Kamloops`, `Chilliwack`, `Maple Ridge`, `Victoria`, `New Westminster`,
  `Prince George`, `Port Coquitlam`, `Vernon`, `West Vancouver`, `Langford`,
  `Mission`, `West Kelowna`, `Port Moody`, `Campbell River`, `Penticton`,
  `North Cowichan`, `Courtenay`, `Fort St. John`, `Cranbrook`, `White Rock`,
  `Pitt Meadows`, `Squamish`, `Salmon Arm`, `Colwood`, `Oak Bay`, `Esquimalt`,
  `Port Alberni`, `Central Saanich`, `Comox`, `Lake Country`, `Powell River`,
  `Parksville`, `Dawson Creek`, `Sooke`, `Summerland`, `Prince Rupert`, `Nelson`,
  `North Saanich`, `Sidney`, `Williams Lake`, `Coldstream`, `Terrace`,
  `Whistler`, `Sechelt`, `View Royal`, `Quesnel`, `Qualicum Beach`, `Ladysmith`,
  `Castlegar`, `Kitimat`, `Merritt`, `Trail`, `Revelstoke`, `Kimberley`, `Kent`,
  `Hope`, `Smithers`, `Northern Rockies`, `Spallumcheen`, `Peachland`,
  `Armstrong`, `Osoyoos`, `Metchosin`, `Duncan`, `Creston`, `Oliver`, `Gibsons`,
  `Vanderhoof`, `Fernie`, `Sparwood`, `Grand Forks`, `Golden`, `Port Hardy`,
  `Rossland`, `Bowen Island`, `Cumberland`, `Mackenzie`, `Lantzville`,
  `Lake Cowichan`, `Houston`, `Invermere`, `Chetwynd`, `Tumbler Ridge`,
  `Enderby`, `Princeton`, `Elkford`, `Pemberton`, `Port McNeill`, `Sicamous`,
  `Lillooet`, `Highlands`, `Clearwater`, `Chase`, `Anmore`, `Tofino`,
  `Logan Lake`, `Fruitvale`, `One Hundred Mile House`, `Burns Lake`, `Lumby`,
  `Fort St. James`, `Barriere`, `Warfield`, `Ucluelet`, `Nakusp`, `Ashcroft`,
  `Taylor`, `Harrison Hot Springs`, `Keremeos`, `Telkwa`, `Lions Bay`,
  `Gold River`, `Fraser Lake`, `Salmo`, `Hudson's Hope`, `Montrose`, `Kaslo`,
  `Cache Creek`, `Valemount`, `Queen Charlotte`, `Masset`, `Port Alice`,
  `Radium Hot Springs`, `Canal Flats`, `Pouce Coupe`, `Greenwood`, `Midway`,
  `New Hazelton`, `Clinton`, `Belcarra`, `McBride`, `New Denver`, `Port Edward`,
  `Sun Peaks Mountain`, `Alert Bay`, `Stewart`, `Port Clements`, `Sayward`,
  `Slocan`, `Granisle`, `Tahsis`, `Hazelton`, `Lytton`, `Wells`, `Silverton`,
  `Zeballos`
];
