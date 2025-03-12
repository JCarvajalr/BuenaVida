
export default interface CartResumeInterface {
    products: {
       name: string, 
       quantity: number,
    }[],
    total: number;
}