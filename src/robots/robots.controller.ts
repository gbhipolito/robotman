import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateRobotDto } from './dto/create-robot.dto';
import { ListBotsQuery } from './dto/list-bots-query';
import { UpdateRobotDto } from './dto/update-robot.dto';
import { Robot } from './interfaces/robot.interface';
import { RobotsService } from './robots.service';

@Controller('robots')
export class RobotsController {
    constructor(private robotsService: RobotsService) {}

    @Get()
    async findAll(@Query() query: ListBotsQuery): Promise<Robot[]> {
        return await this.robotsService.findAll(query);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Robot> {
        return await this.robotsService.findOne(id);
    }

    @Post()
    async create(@Body() createRobotDto: CreateRobotDto): Promise<Robot> {
        // TODO params validation
        
        const robot: Robot = {
            name: createRobotDto.name,
            purpose: createRobotDto.purpose,
            avatar: createRobotDto.avatar || 'default', // TODO https://avatars.dicebear.com/
        };

        return await this.robotsService.create(robot);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateRobotDto: UpdateRobotDto): Promise<Robot> {
        // TODO params validation
        
        const robot: Robot = {
            name: updateRobotDto.name,
            purpose: updateRobotDto.purpose,
            avatar: updateRobotDto.avatar || 'default', // TODO https://avatars.dicebear.com/
        };

        return await this.robotsService.update(id, robot);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<object> { // TODO delete response interface
        await this.robotsService.delete(id);

        return {
            id,
            message: 'deleted'
        };
    }

}
