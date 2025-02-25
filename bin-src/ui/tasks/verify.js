export const initial = {
  status: 'initial',
  title: 'Verify your Storybook',
};

export const dryRun = () => ({
  status: 'skipped',
  title: 'Verify your Storybook',
  output: 'Skipped due to --dry-run',
});

export const pending = (ctx) => ({
  status: 'pending',
  title: 'Verifying your Storybook',
  output: 'This may take a few minutes',
});

export const runOnly = (ctx) => ({
  status: 'pending',
  title: 'Starting partial build',
  output: `Snapshots will be limited to stories matching '${ctx.options.only}'`,
});

export const runOnlyFiles = (ctx) => ({
  status: 'pending',
  title: 'Starting partial build',
  output: `Snapshots will be limited to ${
    Object.keys(ctx.onlyStoryFiles).length
  } story files affected by recent changes`,
});

export const success = (ctx) => ({
  status: 'success',
  title: ctx.isPublishOnly ? `Published your Storybook` : `Started build ${ctx.build.number}`,
  output: ctx.isOnboarding
    ? `Continue setup at ${ctx.build.app.setupUrl}`
    : `View build details at ${ctx.build.webUrl}`,
});

export const failed = (ctx) => ({
  status: 'error',
  title: 'Verifying your Storybook',
  output: ctx.options.only
    ? 'Cannot run a build with no stories. Change or omit the --only predicate.'
    : 'Cannot run a build with no stories. Please add some stories!',
});
