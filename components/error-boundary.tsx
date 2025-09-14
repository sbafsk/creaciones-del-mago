"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)

    // In production, send to error reporting service
    if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
      // Example: Sentry.captureException(error)
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <AlertTriangle className="h-12 w-12 text-destructive" />
              </div>
              <CardTitle>Algo salió mal</CardTitle>
              <CardDescription>
                Se produjo un error inesperado. Por favor, intenta recargar la página.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button onClick={this.handleReset} className="w-full">
                <RefreshCw className="h-4 w-4 mr-2" />
                Intentar de nuevo
              </Button>
              {process.env.NODE_ENV === "development" && this.state.error && (
                <details className="mt-4 text-left">
                  <summary className="text-sm text-muted-foreground cursor-pointer">
                    Detalles del error
                  </summary>
                  <pre className="mt-2 text-xs text-destructive bg-destructive/10 p-2 rounded overflow-auto">
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </CardContent>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}