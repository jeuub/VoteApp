import React, { Component, Fragment } from 'react';
import { call } from '../services/api';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    var getReviews = async () => {
      let respone = await call('get', 'review')
      this.setState({ reviews: respone })
    }
    getReviews()
  }
  async deleteReview(id) {
    let data = { id: id }
    let respone = await call('delete', 'review', { data }).then(
      this.setState({ reviews: this.state.reviews.filter(review => review._id != id) })
    );
  }
  render() {
    return (
      <Fragment>
        <h2>Отзывы</h2>
        {
          this.state.reviews.map((review, idx) => {
            return (
              <div key={idx}>{review.textReview}
                <button onClick={() => this.deleteReview(review._id)}>удалить { }</button>
              </div>
            )
          })
        }
      </Fragment>
    )
  }
}

export default Reviews;