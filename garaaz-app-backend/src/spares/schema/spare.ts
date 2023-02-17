import { Prop , Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

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

    @Prop()
    transaction_type: string;

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