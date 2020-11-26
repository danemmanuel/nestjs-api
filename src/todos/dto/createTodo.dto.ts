import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class CreateTodoDto {
    @ApiModelProperty()
    readonly _id: number;

    @ApiModelProperty()
    readonly text: string;

    @ApiModelProperty()
    readonly complete: boolean;
}
