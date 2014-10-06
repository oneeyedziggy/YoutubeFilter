//console.clear();
//var tubers = ["mathasgames","paulsoaresjr","yogscast martyn","captainsparklez","generikb","imanderzel","docm77","yogscast lewis & simon"];
var tubersBlackWordsConfig = {};
tubersBlackWordsConfig["mathasgames"] = ["gauntlet","sims 4","streaming","wealth of nations","neverending nightmares"];
tubersBlackWordsConfig["yogscast lewis & simon"] = ["hole diggers", "landmark"];
tubersBlackWordsConfig["docm77"] = ["civilization v"];
tubersBlackWordsConfig["imanderZEL"] = ["battlefield 4", "world of tanks", "cs go"];
tubersBlackWordsConfig["generikb"] = ["crash landing"];
tubersBlackWordsConfig["captainSparklez"] = ["five nights", "mianite", "super modded"];
tubersBlackWordsConfig["yogscast martyn"] = ["tOmoDachi"];
tubersBlackWordsConfig["paulsoaresjr"] = ["the escapists","salt"];
tubersBlackWordsConfig["Zisteau"] = ["Rollercoaster"];
tubersBlackWordsConfig["EthosLab"] = ["terrafirmacraft", "crash landing"];
var tubersBlackWords = {};
//convert all tuber names and keywords to lower case
for(tuber in tubersBlackWordsConfig){
for(word in tubersBlackWordsConfig[tuber]){
tubersBlackWordsConfig[tuber][word] = tubersBlackWordsConfig[tuber][word].toLowerCase();
console.log(tubersBlackWordsConfig[tuber][word]);
}
tubersBlackWords[tuber.toLowerCase()] = tubersBlackWordsConfig[tuber];
}
tubers = [];
for(tuber in tubersBlackWords){
tubers.push(tuber);
}
console.log(tubersBlackWords);
console.log(tubers);
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
var flag = 0;
//make passes untill all are gone
while(flag == 0){
	//flip the 'while' flag as soon as you start an iteration
	flag = 1;
	for(element in subListElements){
		element = subListElements[element];
		if((typeof element) == 'object'){
			var tuberName = element.getElementsByClassName('branded-page-module-title-text')[0].childNodes[0].textContent.trim().toLowerCase();
			//console.log('\'' + tuberName + '\''); //
			var videoTitle = element.getElementsByClassName('yt-uix-tile-link')[0].childNodes[0].data.trim().toLowerCase();
			//console.log(videoTitle);
			if(tubers.indexOf(tuberName) >= 0){
				//tuber is in filter list
				for(blackWord in tubersBlackWords[tuberName]){
					blackWord = tubersBlackWords[tuberName][blackWord];
					//console.log(blackWord);
					console.log(blackWord + ', ' + videoTitle + ', ' + videoTitle.indexOf(blackWord))
					if(blackWord != undefined && videoTitle.indexOf(blackWord) >= 0){
						console.log('prev elem deleted');
						element.parentNode.removeChild(element);
						//reset the flag icon if an element is remived this pass
						flag = 0;
						break;
						//console.log(videoTitle);
					}
				}
			}
		}
	}
}
