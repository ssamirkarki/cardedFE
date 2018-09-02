import React, { Component } from 'react'
import {connect} from 'react-redux'
import {retakePhoto} from '../actions'
// import EditCard from './EditCard'

class NewCard extends Component {

   state = {
     showEdit: false
   }

   handleEditClick = () => {
     this.setState(prevState => {
       return {
          showEdit: !prevState.showEdit
       }
     })
   }

  render() {

     let paragraph = this.props.parsedText
     let sentA = paragraph["wordsA"]
     let sentB = paragraph["wordsB"]
     let sentC = paragraph["wordsC"]
     let sentD = paragraph["wordsD"]
     let sentE = paragraph["wordsE"]

    return (
       <div>
           <div className="newCardCont">
             <img src={this.props.imgData} alt=""/>
              <div className="newCard">
              <div id="cardText">
              <form>
               <h4>Line 1: <input type="text" name="line1" placeholder={sentA}/></h4>
               <h4>Line 2: <input type="text" name="line2" placeholder={sentB}/></h4>
               <h4>Line 3: <input type="text" name="line3" placeholder={sentC}/></h4>
               <h4>Line 4: <input type="text" name="line4" placeholder={sentD}/></h4>
               <h4>Line 5: <input type="text" name="line5" placeholder={sentE}/></h4>
               <h4>Name Your Card: <input type="text" name="card_name" placeholder="Card Name"/></h4>
               <h4>Add To Collection:
                  <select>
                    <option name="collection_name" selected value="misc">Miscellaneous</option>
                    <option name="collection_name" value="employers">Employers</option>
                    <option name="collection_name" value="partners">Partners</option>
                    <option name="collection_name" value="creatives">Creatives</option>
                  </select>
               </h4>
               <button type="submit" value="submit">Save Card</button>
               <button onClick={this.props.retakePhoto}>Retake</button>
              </form>
              </div>
            </div>
          </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    imgData: state.imgData,
    parsedText: state.parsedText
  }
}

export default connect(mapStateToProps, {retakePhoto})(NewCard)
