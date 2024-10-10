import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Contact from './Contact';
import Home from './Home';

interface MyProps {
}

interface MyState {
  toggleSideBar: string
}
class DashBoard extends React.Component<MyProps, MyState> {
  constructor(props:MyProps) {
    super(props);
    this.state = {toggleSideBar: ""};
  }
  render() {
    const menu:any=[
      {
        id:0,
        iconClass:'bi bi-grid',
        linkTo:'/home',
        text:'Home'
      },
      {
        id:1,
        iconClass:'bi bi-menu-button-wide',
        linkTo:'/about',
        text:'About'
      },
      {
        id:2,
        iconClass:'bi bi-journal-text',
        linkTo:'/contacts',
        text:'Contacts'
      },
    ]
    return (
      <>
      <div className={this.state.toggleSideBar}>
        <header id="header" className="header fixed-top d-flex align-items-center">
  
          <div className="d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src={require('../assets/img/logo.png').default} alt="" />
              <span className="d-none d-lg-block">NiceAdmin</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn" onClick={()=>
                  this.setState((prevState) => ({ 
                    toggleSideBar: (prevState.toggleSideBar=="toggle-sidebar")?"":"toggle-sidebar" 
                  }))
            }></i>
          </div>
  
          <div className="search-bar">
            <form className="search-form d-flex align-items-center" method="POST" action="#">
              <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
              <button type="submit" title="Search"><i className="bi bi-search"></i></button>
            </form>
          </div>
  
          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
              <li className="nav-item d-block d-lg-none">
                <a className="nav-link nav-icon search-bar-toggle " href="#">
                  <i className="bi bi-search"></i>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-bell"></i>
                  <span className="badge bg-primary badge-number">4</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                  <li className="dropdown-header">
                    You have 4 new notifications
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                      <h4>Lorem Ipsum</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                  </li>
  
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li className="notification-item">
                    <i className="bi bi-x-circle text-danger"></i>
                    <div>
                      <h4>Atque rerum nesciunt</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>1 hr. ago</p>
                    </div>
                  </li>
  
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li className="notification-item">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                      <h4>Sit rerum fuga</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>2 hrs. ago</p>
                    </div>
                  </li>
  
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li className="notification-item">
                    <i className="bi bi-info-circle text-primary"></i>
                    <div>
                      <h4>Dicta reprehenderit</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>4 hrs. ago</p>
                    </div>
                  </li>
  
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                  </li>
  
                </ul>
  
              </li>
              <li className="nav-item dropdown">
  
                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-chat-left-text"></i>
                  <span className="badge bg-success badge-number">3</span>
                </a>
  
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                  <li className="dropdown-header">
                    You have 3 new messages
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li className="message-item">
                    <a href="#">
                      <img src={require('../assets/img/messages-1.jpg').default} alt="" className="rounded-circle" />
                      <div>
                        <h4>Maria Hudson</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>4 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li className="message-item">
                    <a href="#">
                      <img src={require('../assets/img/messages-2.jpg').default} alt="" className="rounded-circle" />
                      <div>
                        <h4>Anna Nelson</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>6 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li className="message-item">
                    <a href="#">
                      <img src={require('../assets/img/messages-3.jpg').default} alt="" className="rounded-circle" />
                      <div>
                        <h4>David Muldon</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>8 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li className="dropdown-footer">
                    <a href="#">Show all messages</a>
                  </li>
  
                </ul>
  
              </li>
              <li className="nav-item dropdown pe-3">
                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                  <img src={require('../assets/img/profile-img.jpg').default} alt="Profile" className="rounded-circle" />
                  <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li className="dropdown-header">
                    <h6>Kevin Anderson</h6>
                    <span>Web Designer</span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                      <i className="bi bi-person"></i>
                      <span>My Profile</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                      <i className="bi bi-gear"></i>
                      <span>Account Settings</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                      <i className="bi bi-question-circle"></i>
                      <span>Need Help?</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <i className="bi bi-box-arrow-right"></i>
                      <span>Sign Out</span>
                    </a>
                  </li>
  
                </ul>
              </li>
  
            </ul>
          </nav>
  
        </header>
        <BrowserRouter>
          <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                {menu.map(function (item: any) {
                  return (
                    <li className="nav-item" key={item.id}>
                      <a className="nav-link ">
                        <i className={item.iconClass}></i>
                        <span>
                          <Link to={item.linkTo}>{item.text}</Link>
                        </span>
                      </a>
                    </li>
                  )
                })}
              {/* <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <a href="components-alerts.html">
                      <i className="bi bi-circle"></i><span>Alerts</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-accordion.html">
                      <i className="bi bi-circle"></i><span>Accordion</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-badges.html">
                      <i className="bi bi-circle"></i><span>Badges</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-breadcrumbs.html">
                      <i className="bi bi-circle"></i><span>Breadcrumbs</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-buttons.html">
                      <i className="bi bi-circle"></i><span>Buttons</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-cards.html">
                      <i className="bi bi-circle"></i><span>Cards</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-carousel.html">
                      <i className="bi bi-circle"></i><span>Carousel</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-list-group.html">
                      <i className="bi bi-circle"></i><span>List group</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-modal.html">
                      <i className="bi bi-circle"></i><span>Modal</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-tabs.html">
                      <i className="bi bi-circle"></i><span>Tabs</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-pagination.html">
                      <i className="bi bi-circle"></i><span>Pagination</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-progress.html">
                      <i className="bi bi-circle"></i><span>Progress</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-spinners.html">
                      <i className="bi bi-circle"></i><span>Spinners</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-tooltips.html">
                      <i className="bi bi-circle"></i><span>Tooltips</span>
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </aside>{/* End Sidebar*/}

          <main id="main" className="main">
            <Routes>
              <Route path="/about" element={<About />}>
              </Route>
              <Route path="/contacts" element={<Contact/>}>
              </Route>
              <Route path="/" element={<Home />}>
              </Route>            
            </Routes>

          </main>{/* End #main */}
          </BrowserRouter>
          {/* ======= Footer ======= */}
          <footer id="footer" className="footer">
            <div className="copyright">
              &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </footer>{/* End Footer */}
  
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  
      </div>
      </>
    )
  }
}

const About = () => <span>About</span>;

export default DashBoard;

