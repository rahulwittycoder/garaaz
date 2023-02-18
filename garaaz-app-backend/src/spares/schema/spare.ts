import { Prop , Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { txnT } from "../dto/create-spare.dto";
export type SpareDocument = Spare & Document;
@Schema({timestamps: {
    createdAt: true,
    updatedAt: true,
  }})
export class Spare{
    @Prop()
    date: Date;

    @Prop()
    brand: string;

    @Prop({enum:txnT})
    transaction_type: txnT;

    @Prop()
    total_Orders: number;

    @Prop()
    total_Order_Value: number;

    @Prop()
    grossMarginPercentage: number;

    @Prop()
    ___v: number;
}

export const SpareSchema = SchemaFactory.createForClass(Spare);
//Create schema and register it with Schema Factory after which we will tell mongoose to register this schema.