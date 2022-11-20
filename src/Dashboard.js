import React, { Component } from "react";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentWillMount() {  
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => this.setState({ products: data }));
        ;
    }

    render() {
        const products = this.state.products;
        console.log(products);
        return (
            <section style={{ "backgroundColor": "#eee" }}>
                <div className="container py-5">
                    <div className="row">
                        {products.map(product => (
                            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                                <div className="card" key={product.id} style={{ "maxWidth": "320px" }}>
                                    <img src={product.image} alt="" className="card-img-top" style={{ "height": "380px", }} />
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">{product.title}</h5>
                                            <h5 className="text-dark mb-0">${product.price}</h5>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="small text-muted">{product.category}</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="small ">{product.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        );
    }
}

export default Dashboard;
    // let [items, setItems] = useState();

    // const ItemList = () => {
    //     return (
    //         <div className="container py-5">
    //             {items.map((item) => {
    //                 return <Item key={item.id} {...item}></Item>
    //             })}
    //         </div>
    //     );
    // }

    // function ItemList() {
    //     const [items, setItems] = useState();

    //     useEffect(() => {
    //         fetch("https://fakestoreapi.com/products")
    //             .then(response => response.json())
    //             .then(data => setItems(data));
    //     }, []);

    //     return (
    //         <div className="container py-5">
    //             {items && <Item items={items} />}
    //         </div>
    //     );
    // }

    // function Item(items) {
        // console.log(items);
        // items.foreach(item => {
        //     console.log(item);
        // });
        // // let { id, title, description, category, image, price, rating } = props;
        // return (
        //     <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
        //         {
        //             items.map(item => (
        //                 <>
        //                     <div className="bg-image hover-zoom ripple rounded ripple-surface">
        //                         <img src={item.image} className="w-100" />
        //                     </div>
        //                     <div className="col-md-6 col-lg-6 col-xl-6">
        //                         <h5>{item.title}</h5>
        //                         <div className="d-flex d-row">
        //                             <div className="text-danger mb-1 me-2">
        //                                 <i className="fa fa-star"></i>
        //                                 <i className="fa fa-star"></i>
        //                                 <i className="fa fa-star"></i>
        //                                 <i className="fa fa-star"></i>
        //                             </div>
        //                             <span>{item.rating.rate}</span>
        //                         </div>
        //                         <div className="mb-2 text-muted small">
        //                             <span>{item.category}</span>
        //                         </div>
        //                         <p className="text-truncate mb-4 mb-md-0">{item.description}</p>
        //                         <p className="text-truncate mb-4 mb-md-0">{item.price}</p>
        //                     </div>
        //                 </>
        //             ))
        //         }
        //     </div>
        // );
    // }

//     return (
//         <div>
//             <div className="row justify-content-center mb-3">
//                 <div className="col-md-12 col-xl-10">
//                     <div className="card shadow-0 border rounder-3">
//                         <div className="card-body">
//                             <div className="row">
//                                 {/* <ItemList></ItemList> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// }

