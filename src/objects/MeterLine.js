import EventEmitter from "./event-emitter"; // Import EventEmitter for event handling
import { setScaleFactor } from "./scale_factor"; // Import function to set the scaling factor
import { Global } from "./global";

export default class MeterLine extends Phaser.GameObjects.Group {
    constructor(scene) {
        super(scene);

        scene.add.existing(this);
    }
    setup() {
        setScaleFactor.call(this, false);
        this.emitter = EventEmitter.getObj();

        this.emitter.on("game:update", this.update.bind(this));
    }

    init() {
        this.addMeterLine();
    }

    addMeterLine() {
        this.meterLine = this.create(
            Global.groundPos.x * this.scaleFact,
            Global.groundPos.y - 100 * this.scaleFact,
            `Items1`
        )
            .setData("nextAdded", false)
            .setFrame(`icon_meter0000`)
            .setScale(this.scaleFact * 4)
            .setDepth(1);
    }

    update(delta) {
        // this.children.entries.forEach((line) => {
        //     if (
        //         line.x + line.width * line.scaleX <
        //         this.scene.cameras.main.scrollX +
        //         this.scene.c_w +
        //         800 * this.scaleFact &&
        //         !line.getData("nextAdded")
        //     ) {
        //         line.setData("nextAdded", true);
        //         this.lineXValue = line.x + line.width * line.scaleX - 600; // Update the last road X position
        //         this.addLine();
        //     }
        // });
    }
}
