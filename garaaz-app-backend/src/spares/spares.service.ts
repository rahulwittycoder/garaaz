import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { CreateSpareDto } from './dto/create-spare.dto';
import { UpdateSpareDto } from './dto/update-spare.dto';
import { Spare, SpareDocument } from './schema/spare';

@Injectable()
export class SparesService {

  constructor(@InjectModel(Spare.name) private spareModel : Model<SpareDocument>){
    
  }

  create(createSpareDto: CreateSpareDto): Promise<Spare> {
    const model = new this.spareModel();
    model.date = createSpareDto.date;
    model.brand = createSpareDto.brand;
    model.transaction_type = createSpareDto.transaction_type;
    model.total_Orders = createSpareDto.total_Orders;
    model.total_Order_Value = createSpareDto.total_Order_Value;
    model.grossMarginPercentage = createSpareDto.grossMarginPercentage;
    model.___v = createSpareDto.___v;
    return model.save();
  }

  insertMany(data)
  {
    return this.spareModel.insertMany(data).then().catch((error)=>console.log(error));
  }

  findAll(): Promise<Spare[]> {
    return this.spareModel.find().exec();
  }

  findOne(id: string) {
    return this.spareModel.findById(id).exec();
  }

  update(id: string, updateSpareDto: UpdateSpareDto) {
    return this.spareModel.updateOne({_id: id}, {
      date : updateSpareDto.date  , 
      brand : updateSpareDto.brand, 
      transaction_type : updateSpareDto.transaction_type,
      total_Orders : updateSpareDto.total_Orders,
      grossMarginPercentage : updateSpareDto.grossMarginPercentage
    }).exec();
  }

  remove(id: string) {
    return this.spareModel.deleteOne({_id : id}).exec();
  }
}
