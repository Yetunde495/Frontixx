import Link from 'next/link';
import React from 'react';
import style from '../css/blogpage.module.css';
import cardStyles from '../css/cards.module.css'


interface Post {
    id: string;
    title: string;
    tags?:Array<string>;
    content: string;
  }
  
  
  interface Posts {
    posts: Post[];
  }
export default function BlogPage() {
    const [posts, setPosts] = React.useState<Post[]>([]);

    const fetchRoutes = async () => {
      const response = await fetch('/api/routes');
      const data = await response.json();
      setPosts(data);
      console.log(data)
    };
    
    React.useEffect(() => {
    

    fetchRoutes();
  }, []);
    return (
        <section className={style.section}>

        <section className={style.blogPostSection}>
         <div className={style.blogPostDiv}>
         {posts.map((val: Post, index: number) => (
            <div key={index} className={cardStyles.card}>
              <div className={cardStyles.imgDiv}>
                <Link href={`/blog/${val.id}`}>
                  <div>
                    <img className={cardStyles.img} src="https://content.wepik.com/statics/4739571/preview-page3.jpg"/>                </div>
                </Link>

              </div>
              <div className={cardStyles.textDiv}>
              <div className={cardStyles.secondTextDiv}>
                <Link href={`/blog/${val.id}`} className={cardStyles.secondTextDivLink}>
                <h3 className={cardStyles.text}>{val.title}</h3>
                </Link>

                <div className={cardStyles.spanDiv}>
                <span className={cardStyles.secondSpanDiv}>
                  {val.tags.map((val) => (
                  <span className={cardStyles.span}>{val}</span>
   
                  ))}

                </span>
                </div>
                </div>
              </div>
               
              
            </div>
        ))}
          </div> 
          
          <div className={style.profileDiv}>
          <div className={style.profileContentWrapper}>
          <div className={style.profileContentDiv}>

            <img src="https://scontent.flos2-2.fna.fbcdn.net/v/t39.30808-6/357746463_6140961179359014_7866434759735390350_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFi--kRKuwHvbjj5Wr-VmyPUAdknm9R7dRQB2Seb1Ht1A1N_JPynm2Xu_aBiLbxV4Fpi_DsHqLKywXuv0kYIXu7&_nc_ohc=8rCnwXok9owAX-DgGHV&_nc_zt=23&_nc_ht=scontent.flos2-2.fna&oh=00_AfDQlxSEECS7Wuh_ULi2vj5X8cO4sw7vvtimWf29ggfeSA&oe=64A92486"/>
            <h3>Yetunde Morenikeji</h3>
          </div>
          </div>
          </div>
        </section>    
       
        
        </section>
    )
}