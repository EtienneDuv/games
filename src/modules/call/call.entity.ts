import { Table, Column, Model, DataType, CreatedAt } from 'sequelize-typescript';

@Table({ timestamps: true })
export class Call extends Model<Call> {
    @Column ({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        field: 'ID',
    })
    id: number;

    @CreatedAt
    called_at: Date;

    @Column
    asked_game: string;
}
