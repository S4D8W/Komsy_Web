
type  ApiError = {
    data: {
        errors: Record<string, string[]>;
      };
      status: number;
      title: string;
      traceId: string;
      type: string;
    };
