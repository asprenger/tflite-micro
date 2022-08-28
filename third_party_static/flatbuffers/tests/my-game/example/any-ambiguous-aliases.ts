// automatically generated by the FlatBuffers compiler, do not modify

import { Monster, MonsterT } from '../../my-game/example/monster';


export enum AnyAmbiguousAliases {
  NONE = 0,
  M1 = 1,
  M2 = 2,
  M3 = 3
}

export function unionToAnyAmbiguousAliases(
  type: AnyAmbiguousAliases,
  accessor: (obj:Monster) => Monster|null
): Monster|null {
  switch(AnyAmbiguousAliases[type]) {
    case 'NONE': return null; 
    case 'M1': return accessor(new Monster())! as Monster;
    case 'M2': return accessor(new Monster())! as Monster;
    case 'M3': return accessor(new Monster())! as Monster;
    default: return null;
  }
}

export function unionListToAnyAmbiguousAliases(
  type: AnyAmbiguousAliases, 
  accessor: (index: number, obj:Monster) => Monster|null, 
  index: number
): Monster|null {
  switch(AnyAmbiguousAliases[type]) {
    case 'NONE': return null; 
    case 'M1': return accessor(index, new Monster())! as Monster;
    case 'M2': return accessor(index, new Monster())! as Monster;
    case 'M3': return accessor(index, new Monster())! as Monster;
    default: return null;
  }
}

