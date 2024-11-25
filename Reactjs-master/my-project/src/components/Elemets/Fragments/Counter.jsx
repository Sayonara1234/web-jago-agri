import React from "react"
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0,
        }
    }
    render() {
        return (
            <div className="flex items-center justify-center border-2 rounded-md w-20 space-x-3 mb-5">
                <button className="text-md" onClick={
                    () => this.setState(
                        {
                            price: this.state.price - 1
                        }
                    )
                }>-
                </button>
                <h1 className="text-sm font-bold text-pink-700">{this.state.price}</h1>
                <button className="text-md" onClick={() => this.setState({ price: this.state.price + 1 })}>+
                </button>
            </div>
        )
    }
}
export default Counter;