# jQuery am-pagination 


  

```javascript
<script type="text/javascript" src="/bower_components/jquery/dist/jquery.js"></script>

<link rel="stylesheet" href="../amazeui/dist/css/amazeui.flat.css"> //Or theme:'amazeui'  
<link rel="stylesheet" href="./dist/css/am-pagination.css"> //Or    //  
<link rel="stylesheet" href="../bootstrap/dist/css/bootstrap.css"> //Or theme:'bootstrap'  


<script type="text/javascript" src="/am-pagination.js"></script>

```

install by bower :

`bower install am-pagination`

~~this plugin based on amazeui~~

use bootstrap or amazeui theme 

~~change default class by className option;~~


```html

 <section id="ampager"></section>
 <br>
 <br>
 <button class="am-btn am-btn-success rderch" >render change page 2</button>
 <span>Or</span>
 <button class="am-btn am-btn-primary newch">new change page 5</button>
 <br>

```
```javascript
             

var pagerOpts={
         maxSize: 7, // Limit number for pagination size.      default:7
         totals: 100, //Total number of items in all pages.
         page: 1,  //select page index  1....total page
         pageSize: 10, //Maximum number of items per page. A value less than one indicates all items on one page.  default :10
         lastText: '&raquo;&raquo;', //Text for Last button.    default: '&raquo;&raquo;'
         firstText: '&laquo;&laquo;', //Text for First button. default: '&laquo;&laquo;'
         prevText: '&laquo;',//&laquo; //Text for Previous  button.  default:'&laquo;'
         nextText: '&raquo;', //Text for next button.   default:'&raquo;'
         rotate: true,//Whether to keep current page in the middle of  the visible ones   default:true
         directionLinks: true,// Whether to display Previous / Next buttons.  default:true
         boundaryLinks: true,// Whether to display first / last buttons.      default:true
         theme:'', // 'bootstrap' or 'amazeui'   defalut:''   default ui  only modify background color from bootstrap pagination
         btnSize:'' // 'sm'  or 'lg'  defalut : ''
};

//bind change event

var pger =jQuery('#ampager')
                .pagination(pagerOpts)
                .onChangePage(function(e){
                         console.info('pager bind envent :selected page:'+e.page+'  current pageSize:'+e.pageSize+'  number of items'+e.totals);
                });


                //Or 
                
                jQuery('#ampager').on('am.pagination.change',function(e){
                      console.info('jquery bind event :selected page:'+e.page+'  current pageSize:'+e.pageSize+'  number of items'+e.totals);

                });

 //change


  jQuery('.rderch').on('click',function(){
        var rdrOpts={
             totals:100,/*optional*/  //default:current totals
             pageSize:10,/*optional*/ //default:current pageSize
             page:2/*optional*/ //default:current selected page
          }
        pger.render(rdrOpts);
 });
 jQuery('.newch').on('click',function(){
       jQuery('#ampager').pagination({
           page:5
        });
 });


```
You can use am-pagination   by   amPagination of window  :
```javascript
    (function(amPager){
       var taget =document.querySelector('#ampager');  //or jQuery('#ampager')  or '#ampager'
       amPager(taget,{
          page:10
       });
    })(amPagination);
       
```

![image](https://github.com/lucky51/am-pagination/blob/master/images/am-pagination.jpg?raw=true)


![image](https://github.com/lucky51/am-pagination/blob/master/images/am-pagination2.jpg?raw=true)