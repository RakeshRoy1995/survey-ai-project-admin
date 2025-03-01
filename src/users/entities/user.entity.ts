import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
export enum Status {
    TRUE = 1,
    FALSE = 0,
}
class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 200 })
    username: string

    @Column("varchar", { length: 100 })
    email : string

    @Column("varchar", { length: 200 })
    password: string

    @Column("int", { width: 5 }) 
    created_by: number

    @Column("int", { width: 5 }) 
    updated_by: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date

    @Column("datetime", { nullable: true })
    deleted_at: Date

    @Column({
        type: "enum",
        enum: Status,
        default: Status.TRUE,
    })
    status: Status
}