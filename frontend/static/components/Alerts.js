import React, { Component , Fragment} from 'react'
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import {connect} from 'react-redux';
export class Alerts extends Component {

        static propTypes = {
            error:PropTypes.object.isRequired
        }
       
        componentDidUpdate(prevProps) {
            const { error , alert} = this.props;
            if(error!==prevProps.error){
                if(error.msg.name){
                    swal ( "Oops" , `"Name :"${error.msg.name.join()}`,  "error" )
                }
                else if(error.msg.email){
                    swal ( "Oops" , `"Email :"${error.msg.email.join()}`,  "error" )
                }
                else if(error.msg.name&&error.msg.email){
                    swal ( "Oops" , `"Name :"${error.msg.name.join()} 
                    "Email :" ${error.msg.email.join()}`,  "error" )
                }
                else if(error.msg.lieu_depart){w
                    swal ( "Oops" , `"From :"${error.msg.lieu_depart.join()} `)
                }
                else if(error.msg.lieu_arrive){
                    var g = error.msg.lieu_arrive;
                    swal ( "Oops" , `"To :"${error.msg.g.join()} `)
                }
                else if(error.msg.date_depart){
                    swal ( "Oops" , `"Going Time :"${error.msg.date_depart.join()} `)
                }
                else if(error.msg.date_arrive){
                    swal ( "Oops" , `"Arrival Time :"${error.msg.date_arrive.join()} `)
                }
                else if(error.msg.num_tele){
                    swal ( "Oops" , `"Phone Number :"${error.msg.num_tele.join()} `)
                }
                else if(error.msg.ville){
                    swal ( "Oops" , `"City :"${error.msg.ville.join()} `)
                }
                else if(error.msg.bagages){
                    swal ( "Oops" , `"Goods :"${error.msg.bagages.join()} `)
                }
                else if(error.msg.comment){
                    swal ( "Oops" , `"Comment :"${error.msg.comment.join()} `)
                }
                else if(error.msg.ville_distination){
                    swal ( "Oops" , `"Destination City :"${error.msg.ville_distination.join()} `)
                }
                else if(error.msg.num_personnes){
                    swal ( "Oops" , `"Number Of Persons :"${error.msg.num_personnes.join()} `)
                }
                else if(error.msg.num_places){
                    swal ( "Oops" , `"Number Of Places :"${error.msg.num_places.join()} `)
                }
                else if(error.msg.lieu){
                    swal ( "Oops" , `"Exact Place :"${error.msg.lieu.join()} `)
                }
                else if(error.msg.distination){
                    swal ( "Oops" , `"Destination :"${error.msg.distination.join()} `)
                }
                 else if(error.msg.non_field_errors){
                    swal ( "Oops" , `"Error :"${error.msg.non_field_errors.join()} `)
                }
                 else if(error.msg.username){
                    swal ( "Oops" , `"username :"${error.msg.username.join()} `)
                }
               
            }
        }

    render() {
        return (
            <Fragment/>
                
            
        );
    }
}
const mapStateToProps = state =>({
    error:state.errors
});

export default connect(mapStateToProps)(Alerts);
