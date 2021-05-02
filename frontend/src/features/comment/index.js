// //import { ReactComponent } from '*.svg'
// import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom';
// class Comment extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             newItem: ''
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(e) {
//         this.setState({
//             newItem: e.target.value
//         })
//     }
//     render() {

//         return (
//             <div>
//                 <input type="text" value={this.state.newItem}
//                     onChange={this.handleChange} placeholder="Say something"
//                 />
//                 <button
//                     onClick={() => {
//                         this.props.add(this.state.newItem)
//                         this.setState({
//                             newItem: '',
//                         })
//                     }}
//                 >Comment</button>

//                 {
//                     this.props.comment.map(item =>
//                         <li>
//                             {item}
//                         </li>
//                     )
//                 }
//                 <button id="back" >< Link to="/listAllBooks">Back</ Link></button>
//             </div>

//         )

//     }
// }
// function mapStateToProps(state, ownProps) {
//     return {
//         comment: state.comment
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         add: (value) => {
//             dispatch({ type: 'ADD', payload: value })
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Comment)