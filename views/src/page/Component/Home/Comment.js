const Comment = ({ replyList }) => {
  return (
    <div className="comment-section">
      <div className="comment-sec">
        <ul>
          {replyList.map((item, key) => {
            return (
              <li key={key}>
                <div className="comment-list">
                  <div className="bg-img">
                    <img src="images/resources/bg-img1.png" alt="" />
                  </div>
                  <div className="comment">
                    <h3>John Doe</h3>
                    <span>
                      <img src="images/clock.png" alt="" /> {item.reply_date}
                    </span>
                    <p>{item.reply_content} </p>
                    <a href="#!" title="" className="active">
                      <i className="fa fa-reply-all" />
                      Reply
                    </a>
                  </div>
                </div>
                {/*comment-list end*/}
              </li>
            );
          })}
        </ul>
      </div>
      {/*comment-sec end*/}
      <div className="post-comment">
        <div className="cm_img">
          <img src="images/resources/bg-img4.png" alt="" />
        </div>
        <div className="comment_box">
          <form>
            <input type="text" placeholder="Post a comment" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      {/*post-comment end*/}
    </div>
  );
};

export default Comment;
