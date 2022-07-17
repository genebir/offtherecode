import { useNavigate } from "react-router-dom";

const PostProject = (props) => {
  const history = useNavigate();
  return (
    <div className="post-popup pst-pj active">
      <div className="post-project">
        <h3>Post a project</h3>
        <div className="post-project-fields">
          <form>
            <div className="row">
              <div className="col-lg-12">
                <input type="text" name="title" placeholder="Title" />
              </div>
              <div className="col-lg-12">
                <div className="inp-field">
                  <select>
                    <option>Category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <input type="text" name="skills" placeholder="Skills" />
              </div>
              <div className="col-lg-12">
                <div className="price-sec">
                  <div className="price-br">
                    <input type="text" name="price1" placeholder="Price" />
                    <i className="la la-dollar" />
                  </div>
                  <span>To</span>
                  <div className="price-br">
                    <input type="text" name="price1" placeholder="Price" />
                    <i className="la la-dollar" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <textarea
                  name="description"
                  placeholder="Description"
                  defaultValue={""}
                />
              </div>
              <div className="col-lg-12">
                <ul>
                  <li>
                    <button className="active" type="submit" value="post">
                      Post
                    </button>
                  </li>
                  <li>
                    <a title="" onClick={props.isprojhandler}>
                      Cancel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        {/*post-project-fields end*/}
        <a title="" onClick={props.isprojhandler}>
          <i className="la la-times-circle-o" />
        </a>
        {/*post-project end*/}
      </div>
    </div>
  );
};

export default PostProject;
