const Klasa = require("klasa");

module.exports = {
  // KlasaClient
  Client: require("./lib/Client"),
  KlasaClient: require("./lib/Client"),

  // lib/extensions
  KlasaGuild: Klasa.KlasaGuild,
  KlasaMessage: Klasa.KlasaMessage,
  KlasaUser: Klasa.KlasaUser,

  // lib/permissions
  PermissionLevels: Klasa.PermissionLevels,

  // lib/schedule
  Schedule: Klasa.Schedule,
  ScheduledTask: Klasa.ScheduledTask,

  // lib/settings
  Settings: Klasa.Settings,
  Gateway: Klasa.Gateway,
  GatewayDriver: Klasa.GatewayDriver,
  GatewayStorage: Klasa.GatewayStorage,
  Schema: Klasa.Schema,
  SchemaFolder: Klasa.SchemaFolder,
  SchemaPiece: Klasa.SchemaPiece,

  // lib/structures/base
  AliasPiece: Klasa.AliasPiece,
  AliasStore: Klasa.AliasStore,
  Piece: Klasa.Piece,
  Store: Klasa.Store,

  // lib/structures
  Argument: Klasa.Argument,
  ArgumentStore: Klasa.ArgumentStore,
  Command: Klasa.Command,
  CommandStore: Klasa.CommandStore,
  Event: Klasa.Event,
  EventStore: Klasa.EventStore,
  Extendable: Klasa.Extendable,
  ExtendableStore: Klasa.ExtendableStore,
  Finalizer: Klasa.Finalizer,
  FinalizerStore: Klasa.FinalizerStore,
  Inhibitor: Klasa.Inhibitor,
  InhibitorStore: Klasa.InhibitorStore,
  Language: Klasa.Language,
  LanguageStore: Klasa.LanguageStore,
  Monitor: Klasa.Monitor,
  MonitorStore: Klasa.MonitorStore,
  MultiArgument: Klasa.MultiArgument,
  Provider: Klasa.Provider,
  ProviderStore: Klasa.ProviderStore,
  Serializer: Klasa.Serializer,
  SerializerStore: Klasa.SerializerStore,
  SQLProvider: Klasa.SQLProvider,
  Task: Klasa.Task,
  TaskStore: Klasa.TaskStore,

  // lib/usage
  CommandPrompt: Klasa.CommandPrompt,
  CommandUsage: Klasa.CommandUsage,
  Usage: Klasa.Usage,
  Possible: Klasa.Possible,
  Tag: Klasa.Tag,
  TextPrompt: Klasa.TextPrompt,

  // lib/util
  Colors: Klasa.Colors,
  KlasaConsole: require("./lib/util/KlasaConsole"),
  constants: Klasa.constants,
  Cron: Klasa.Cron,
  Duration: Klasa.Duration,
  QueryBuilder: Klasa.QueryBuilder,
  RateLimit: Klasa.RateLimit,
  RateLimitManager: Klasa.RateLimitManager,
  ReactionHandler: Klasa.ReactionHandler,
  RichDisplay: Klasa.RichDisplay,
  RichMenu: Klasa.RichMenu,
  Stopwatch: Klasa.Stopwatch,
  Timestamp: Klasa.Timestamp,
  Type: Klasa.Type,
  util: Klasa.util,

  // version
  version: Klasa.version
};
