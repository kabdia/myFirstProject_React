import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
    <div className={classes.post_list__item}>
      <div className={classes.item__head}>
        <div className={classes.head__photo}>
        <img className={classes.head__photo_style} src="data:image/jpeg;base64,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"  />
        </div>
        <div className={classes.head__autor}>
        <p className={classes.autor__name}>Супер Котик</p>
        <p className={classes.autor__time}>2 февраля 2023</p>
        </div>
        </div>
      <div className={classes.item__content}>
        <div className={classes.item__content_style}>
          <p className={classes.item__content_text}>{props.message}</p>          
        </div>
      </div>
      <div className={classes.item_counts}>
        <img className={classes.counts_img} src="https://cdn-icons-png.flaticon.com/512/2839/2839214.png"/>
        <p className={classes.counts_number}>{props.likesCount}</p>
      </div>
    </div>
    
  )  
}

export default Post;