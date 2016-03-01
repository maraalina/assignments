// create fragment
       function create(htmlStr) {
         var frag = document.createDocumentFragment(),
         temp = document.createElement('div');
         temp.innerHTML = htmlStr;
         while (temp.firstChild) {
           frag.appendChild(temp.firstChild);
         }
         return frag;
       }

       // ADD new article
       function add_article() {
         var fragment = create('<div class="col-xs-3 col-md-5 vertical-align-outer add_article_space"><div class="third-col vertical-align-inner"><div class="data"> 9/11/2014</div><h5>BETE?</h5><hr><p>Take a look at the features in the new release of Sanctuary, our education platform for League of Legends players.</p></div>');
         document.getElementById("rows_byclick").appendChild(fragment);
       }
