import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
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
        return this.robotsService.findAll(query);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<string> { // TODO change to Promise<Robot>
        return `Got one! ${id}`;
    }

    @Post()
    async create(@Body() createRobotDto: CreateRobotDto): Promise<Robot> {
        // TODO params validation
        
        const robot: Robot = {
            name: createRobotDto.name,
            purpose: createRobotDto.purpose,
            avatar: createRobotDto.avatar || 'default', // TODO https://avatars.dicebear.com/
        };

        return this.robotsService.create(robot);
    }

    async update(@Param('id') id: string, @Body() updateRobotDto: UpdateRobotDto): Promise<string> { // TODO change to Promise<Robot>
        return `Updates ${id} robot`;
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<string> { // TODO change to Promise<void>
        return `Will delete ${id}`;
    }

}
