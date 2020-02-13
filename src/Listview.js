import React, { Component } from "react"
 
class Listview extends Component {

  constructor(props) {
    super(props)

    this.state = {
      availableHeight: 0,
      scrollTop: 0
    }
  
    this.handleScroll = this.handleScroll.bind(this)
    this.renderRowAtIndex = this.renderRowAtIndex.bind(this)
  }

  componentDidMount() {
    this.setState({
      availableHeight: this.node.clientHeight
    });
  }

  handleScroll(event) {
    this.setState({
      scrollTop: event.target.scrollTop
    });
  };

  renderRowAtIndex(index) {
    return (
      <div style={{
        height: this.props.rowHeight
      }}>
        <strong>Row: </strong> {index}
      </div>
    )
  }

  render() {
    const { availableHeight, scrollTop } = this.state
    const { rowHeight, numRows } = this.props
    const totalHeights = rowHeight * numRows

    const startIndex = Math.floor(scrollTop / rowHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(this.state.availableHeight / rowHeight) + 1,
      numRows
    );

    const items = []

    let index = startIndex
    while (index < endIndex) {
      items.push(
      <li key={index}>
        {this.renderRowAtIndex(index)}
      </li>)
      index++
    }

    return (
      <div
        className="listview-container"
        onScroll={this.handleScroll}
        ref={node => (this.node = node)}
      >

        <div
          className="listview-inner"
          style={{
            height: totalHeights,
            paddingTop: startIndex * rowHeight
          }}>
          <ul>
            {items}
          </ul>
        </div>

        <div className="info">
          <header>
            <div><strong className="heading-margin">Above is a large unordered list<br />of elements rendered to the UI</strong></div>
          </header>

          <div>
            <em>Total Height:</em> {totalHeights}
          </div>
          <div>
            <em>Available Height:</em> {availableHeight}
          </div>
          <div>
            <em>Scroll Top:</em> {scrollTop}
          </div>
          <div>
            <em>Start Index:</em> {startIndex}
          </div>
          <div>
            <em>End Index:</em> {endIndex}
          </div>
        </div>
      </div>
    );
  }
}

export default Listview;
