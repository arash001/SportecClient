USE [SportecDB]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 6/27/2023 10:59:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Fixtures]    Script Date: 6/27/2023 10:59:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Fixtures](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[MatchId] [nvarchar](max) NOT NULL,
	[DlProviderId] [int] NOT NULL,
	[CompetitionId] [nvarchar](max) NOT NULL,
	[CompetitionName] [nvarchar](max) NOT NULL,
	[CompetitionType] [nvarchar](max) NOT NULL,
	[MatchDayId] [nvarchar](max) NOT NULL,
	[MatchDay] [int] NOT NULL,
	[MatchType] [nvarchar](max) NOT NULL,
	[Season] [nvarchar](max) NOT NULL,
	[SeasonId] [nvarchar](max) NOT NULL,
	[PlannedKickoffTime] [datetime2](7) NOT NULL,
	[StadiumName] [nvarchar](max) NOT NULL,
	[StadiumId] [nvarchar](max) NOT NULL,
	[HomeTeamName] [nvarchar](max) NOT NULL,
	[HomeTeamId] [nvarchar](max) NOT NULL,
	[GuestTeamName] [nvarchar](max) NOT NULL,
	[GuestTeamId] [nvarchar](max) NOT NULL,
	[MatchDateFixed] [bit] NOT NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NOT NULL,
	[FixturesId] [int] NULL,
 CONSTRAINT [PK_Fixtures] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FixturesLits]    Script Date: 6/27/2023 10:59:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FixturesLits](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FeedType] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_FixturesLits] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PutDataRequests]    Script Date: 6/27/2023 10:59:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PutDataRequests](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FixturesId] [int] NOT NULL,
	[RequestId] [nvarchar](max) NOT NULL,
	[MessageTime] [datetime2](7) NOT NULL,
	[TransmissionComplete] [bit] NOT NULL,
	[TransmissionSuspended] [bit] NOT NULL,
 CONSTRAINT [PK_PutDataRequests] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Fixtures]  WITH CHECK ADD  CONSTRAINT [FK_Fixtures_FixturesLits_FixturesId] FOREIGN KEY([FixturesId])
REFERENCES [dbo].[FixturesLits] ([Id])
GO
ALTER TABLE [dbo].[Fixtures] CHECK CONSTRAINT [FK_Fixtures_FixturesLits_FixturesId]
GO
ALTER TABLE [dbo].[PutDataRequests]  WITH CHECK ADD  CONSTRAINT [FK_PutDataRequests_FixturesLits_FixturesId] FOREIGN KEY([FixturesId])
REFERENCES [dbo].[FixturesLits] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PutDataRequests] CHECK CONSTRAINT [FK_PutDataRequests_FixturesLits_FixturesId]
GO
