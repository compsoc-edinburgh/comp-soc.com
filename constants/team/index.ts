import { Committee } from '@/types/team'
import { team2024 } from './team2024'
import { team2023 } from './team2023'
import { team2022 } from './team2022'
import { team2021 } from './team2021'
import { team2020 } from './team2020'
import { team2019 } from './team2019'
import { team2018 } from './team2018'
import { team2017 } from './team2017'
import { team2016 } from './team2016'
import { team2015 } from './team2015'
import { team2014 } from './team2014'
import { team2013 } from './team2013'

export const TEAM: Record<string, Committee[]> = {
  2024: team2024,
  2023: team2023,
  2022: team2022,
  2021: team2021,
  2020: team2020,
  2019: team2019,
  2018: team2018,
  2017: team2017,
  2016: team2016,
  2015: team2015,
  2014: team2014,
  2013: team2013,
}
