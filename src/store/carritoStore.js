import {create} from "zustand";

export const useCarritoStore = create ((set, get)=> ({
    items:[],

    agregarProductos: (productos)=> set ((state)=>{
        const existe= state.items.find((item)=>item.id === productos.id);

        if(existe){
            return{
                items: state.items.map((item)=> item.id === productos.id ? {...item, cantidad: item.cantidad + 1}: item,),
            };
        }

        return{
            items: [...state.items, {...productos, cantidad: 1}],
        };

    }),

    eliminarProducto: (productoId)=> set ((state)=>({
        items: state.items.filter((item)=>item.id !== productoId),

    })),

    actualizarCantidad: (productoId, cantidad)=>set((state)=>({
        items: state.items.map((item)=>item.id === productoId ? {...item, cantidad: cantidad }: item,),
    })),

    vaciarCarrito: ()=> set ({ items: [] }),

    getTotalItems: ()=> {
        const state = get ();
        return state.items.reduce((accumulator, item)=> accumulator + item.cantidad, 0,); 
    },

    getTotalPrecio: ()=> {
        const state = get();
        return state.items.reduce((accumulator, item)=> accumulator + item.precio * item.cantidad,0,);
    },


}));
