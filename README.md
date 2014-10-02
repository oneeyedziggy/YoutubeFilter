YoutubeFilter
=============

This is a script that can be run to filter youtube results by keywords on a per-youtuber basis

---------------------------------------------------------------------------
Configuration:
---------------------------------------------------------------------------
first change the filters at the top adding the name of the youtuber as a new index and keywords/phrases to filter out as string members of that "array" (neither the youtuber name nor substring to match are case sensitive):

    tubersBlackWordsConfig["imanderZEL"] = ["battlefield 4"];
    tubersBlackWordsConfig["generikb"] = ["crash landing", "attack"];

w/ the above set at the top of the script, it will remove videos from "ImAnderZEL" with "battlefield 4" and videos from "generikb" with "crash landing" or "attack" in the title


---------------------------------------------------------------------------
Use:
---------------------------------------------------------------------------
go to https://www.youtube.com/feed/subscriptions (you may need to log in) 
open your browser dev tools, (preferably firefox but it works in chrome as far as I've checked)
then paste your modified script into the developer tools/firebug console and click run or hit enter 

you can also paste your changes to https://bookmarkify.it/ and create a bookmarklet for your bookmarks bar and just click the link to filter the currently visible set of videos

you'll need to re-run it each time you load more videos, either by scrolling down or by clicking the "Load more" button at the bottom of the list, so when deciding what to watch 

*it works sporatically on the 'what to watch' page too, but not very well


---------------------------------------------------------------------------
Future, unimplemented possible features
---------------------------------------------------------------------------

  a gui:
    injecting buttons onto the page to add filters
    layering a form with options/preferences over the page... fancy/bouncy jquery windowshades/etc.
  
  storage/portability:
    a mechanism to import/export larger lists, or to store them across (probably in localStorage) and regenerate the script with new filters added explicitly (as defined properties/values of the tubersBlackWordsConfig object)
    
  More control:
    I'm hoping to add youtuber specific whitelists as well as global black and white lists, I'd expect globals to be overridden by youtuber specific rules, and whitelists to override blacklists in the following pattern:
    1.)Mark everything by anyone what contains the word 'foo' for removal
    2.)If any marked-for-removal video containsthe word bar in the title, un-mark it
    3.)then if any video by youtuber 'bebop' contains the word 'babar' mark it for removal
    4.)if any marked-for-removal by youtuber 'bebop' contains the word 'rocksteady' un-mark it
    5.)remove all videos marked for removal.
    
  broader application:
    better support for the 'what to watch' page
    possibly applicable to general search results as well (especially once global words are filtered out)
  
  lower barrier to use:
    make this work automatically via greasemonkey or an addon... run at an interval or trigger by loading more results automatically
    
