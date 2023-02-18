export enum txnT{Facilitation="Facilitation",Trading="Trading"};
export class CreateSpareDto {
    date?: Date;
    brand: string;
    transaction_type: txnT;
    total_Orders: number;
    total_Order_Value: number;
    grossMarginPercentage: number
    createdAt?: string;
    updatedAt?: string;
    ___v: number;
}