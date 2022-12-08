import React from 'react';

const Register =({onRouteChange})=> {
    return(
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">            
            <div>
                <main className="pa4 black-80">
                        <div className='measure'>
                            <fieldset id="register" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                            </div>
                            {/* <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
                            </fieldset>
                            <div className="">
                            <input onClick={()=>{onRouteChange('home')}} className="f6 link b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                            </div>
                            {/* <div className="lh-copy mt3"> */}
                            {/* <legend className="f6 link dim black db grow pointer">Register</legend> */}
                            {/* <a href="#0" class="f6 link dim black db">Forgot your password?</a> */}
                            {/* </div> */}
                            </div> 
                    </main>

            </div>
        </article>
    )
}

export default Register;