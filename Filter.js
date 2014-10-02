console.clear();
var tubers = ["mathasgames","paulsoaresjr","yogscast martyn","captainsparklez","generikb","imanderzel","docm77","yogscast lewis & simon"];
var tubersBlackWords = {};
tubersBlackWords["mathasgames"] = ["sims 4","gauntlet","streaming","wealth of nations","neverending nightmares"];
tubersBlackWords["yogscast lewis & simon"] = ["hole diggers", "landmark"];
tubersBlackWords["docm77"] = ["civilization v"];
tubersBlackWords["imanderzel"] = ["battlefield 4"];
tubersBlackWords["generikb"] = ["crash landing"];
tubersBlackWords["captainsparklez"] = ["five nights", "minite", "super modded"];
tubersBlackWords["yogscast martyn"] = ["tomodachi"];
tubersBlackWords["paulsoaresjr"] = ["the escapists"];
//tubersBlackWords[""] = [""];
//tubersBlackWords[""] = [""];
//tubersBlackWords[""] = [""];

//console.log(tubersBlackWords);
//tubersBlackWords["yogscast lewis & simon"] = ["hole diggers"];
//tubersBlackWords["yogscast lewis & simon"] = ["hole diggers"];

//globalBlackWords = ["sims 4", "streaming", "wealth of nations"];
//tubersWhiteWords["yogscast lewis & simon"] = ["hole diggers"];
//globalWhiteWords = ["sims 4", "streaming", "wealth of nations"];
//console.log(tubersBlackWords['mathasgames']);
var subList = document.getElementById('browse-items-primary');
//console.log(subList)
//var subListElements = subList.getElementsByTagName('li');
var subListElements = subList.getElementsByClassName('feed-item-container');

//console.log(subListElements);

for(element in subListElements){
  element = subListElements[element];
  if((typeof element) == 'object'){
    var tuberName = element.getElementsByClassName('branded-page-module-title-text')[0].childNodes[0].textContent.trim().toLowerCase();
    console.log('\'' + tuberName + '\''); //
    var videoTitle = element.getElementsByClassName('yt-uix-tile-link')[0].childNodes[0].data.trim().toLowerCase();
    //console.log(videoTitle);
    if(tubers.indexOf(tuberName) >= 0){
      //tuber is in filter list
      for(blackWord in tubersBlackWords[tuberName]){
        blackWord = tubersBlackWords[tuberName][blackWord];
        //console.log(blackWord);
        if(blackWord != undefined && videoTitle.indexOf(blackWord) >= 0){
          element.parentNode.removeChild(element);
          //console.log(videoTitle);
        }
      }
    }
  }
}
