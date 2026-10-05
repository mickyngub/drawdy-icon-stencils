export type IconSource = "lucide" | "brand" | "iconify";

export type TabId = "icons" | "brands" | "tech" | "emoji" | "flags";

export type IconRef = {
    source: IconSource;
    name: string;
    title: string;
    hex?: string;
};

export type IconPick = IconRef & { svg: string };

export type IconSize = 32 | 64 | 128 | 256;

export type StrokeWidth = 1.5 | 2 | 2.75;

export type PlaceOptions = {
    size: IconSize;
    color: string;
    brandColours: boolean;
    stroke: StrokeWidth;
    label: boolean;
};

export type PersistedState = {
    tab: TabId;
    recent: IconRef[];
    options: PlaceOptions;
};

export type WebviewToDriver =
    | { type: "ready" }
    | { type: "drop-icon"; icon: IconPick; x: number; y: number }
    | { type: "insert-icon"; icon: IconPick }
    | {
          type: "persist";
          tab: TabId;
          recent: IconRef[];
          options: PlaceOptions;
      };

export type DriverToWebview =
    | { type: "init"; tab: TabId; recent: IconRef[]; options: PlaceOptions }
    | { type: "theme"; cssVars: string };
