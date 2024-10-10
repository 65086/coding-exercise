import React from 'react';
import DashBoard from './DashBoard';
import { IappCommonState } from '../redux/reducers/appReducer';
import { ThunkDispatch } from 'redux-thunk';
import { login } from '../redux/actions';
import { connect } from 'react-redux';

interface ImyProps {
}
interface ImyState {
    isLoggedIn:boolean
}
interface DispatchProps {
    login: (username: string, password: string) => void
}
interface ImyStateProps {
    appCommonState: IappCommonState
}

type Props = ImyStateProps & DispatchProps & ImyProps
class Login extends React.Component<Props, ImyState> {
  constructor(props:Props,context:any) {
    super(props,context);
    this.state = {isLoggedIn: false};
  }
  render() {

    const onLoginClick=()=>{

        this.props.login("ss","ss");
     
    }
    return (
      <>
  {this.props.appCommonState.isLoggedIn ?
    <DashBoard/>
  :
 <div className="container">
 <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

        <div className="d-flex justify-content-center py-4">
          <a href="index.html" className="logo d-flex align-items-center w-auto">
            <img src={require('../assets/img/logo.png').default}/>
            <span className="d-none d-lg-block">NiceAdmin</span>
          </a>
        </div>{/* End Logo */}

        <div className="card mb-3">

          <div className="card-body">

            <div className="pt-4 pb-2">
              <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
              <p className="text-center small">Enter your username & password to login</p>
            </div>

            <form className="row g-3 needs-validation" >

              <div className="col-12">
                <label className="form-label">Username</label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">@</span>
                  <input type="text" name="username" className="form-control" id="yourUsername" required/>
                  <div className="invalid-feedback">Please enter your username.</div>
                </div>
              </div>

              <div className="col-12">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="yourPassword" required/>
                <div className="invalid-feedback">Please enter your password!</div>
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                  <label className="form-check-label">Remember me</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100" onClick={()=>onLoginClick()} type="submit">Login</button>
              </div>
              <div className="col-12">
                <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
              </div>
             
            </form>


          </div>
        </div>
        {this.props.appCommonState.isFetching &&

<div className="modal fade show" id="verticalycentered" style={{display:'block'}}>
<div className="modal-dialog modal-dialog-centered">
  <div className="modal-content">
    <div className="modal-body">
    <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
    </div>
   
  </div>
</div>
</div>


              
             }
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>

      </div>
    </div>
  </div>

</section>

</div>
  }
      </>
    )
  }
}

const mapStateToProps = (states: IappCommonState): ImyStateProps => (
    {
        appCommonState:states
    }
)
  
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
    return {
      login: async (username, password) => {
        await dispatch(login(username, password))
        console.log('Login completed [UI]')
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
