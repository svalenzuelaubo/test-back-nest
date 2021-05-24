import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'product' })
  export class Product {
    @PrimaryColumn({ name: 'handle',unique: true })
    handle?: string;
  
    @Column({ name: 'title'})
    title: string;
  
    @Column({ name: 'description'})
    description: string;
  
    @Column({ name: 'sku' ,type:'float'})
    sku: number;

    @Column({ name: 'grams' ,type:'float'})
    grams: number;

    @Column({ name: 'stock' })
    stock: number;

    @Column({ name: 'price' })
    price: number;

    @Column({ name: 'comparePrice' })
    comparePrice: number;

    @Column({ name: 'barcode',type:'float',nullable:true })
    barcode: number;
  
    @CreateDateColumn({
      name: 'created_at',
      type: 'timestamp with time zone',
      nullable: true,
    })
    createdAt?: Date;
  
    @UpdateDateColumn({
      name: 'updated_at',
      type: 'timestamp with time zone',
      nullable: true,
    })
    updatedAt?: Date;
  }
  