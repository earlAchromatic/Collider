import mitt from "mitt";

type Events = {
  navbarBroadcast: navbarBC;
  shiftdrawer: void;
  foo: string;
  bar?: number;
};

export interface navbarBC {
  navH: number;
}

const emitter = mitt<Events>();

export default emitter;
