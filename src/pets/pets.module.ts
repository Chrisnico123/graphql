import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { Pet } from './pet.entity';
import { Module } from '@nestjs/common';
import { OwnersModule } from 'src/owners/owners.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), OwnersModule],
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
