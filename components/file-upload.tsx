"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { Upload, X, FileText, AlertCircle, CheckCircle } from "lucide-react"
import { analytics } from "@/lib/analytics"
import { useI18n } from "@/hooks/use-i18n"

interface FileUploadProps {
  onFilesChange: (files: File[]) => void
  maxFiles?: number
  maxSize?: number // in MB
  acceptedTypes?: string[]
}

interface UploadedFile {
  file: File
  progress: number
  status: "uploading" | "success" | "error"
  error?: string
}

export function FileUpload({
  onFilesChange,
  maxFiles = 10,
  maxSize = 200,
  acceptedTypes = [".stl", ".obj", ".step", ".stp", ".jpg", ".jpeg", ".png", ".pdf"],
}: FileUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const { t } = useI18n()

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const validFiles = acceptedFiles.filter((file) => {
        const sizeInMB = file.size / (1024 * 1024)
        const extension = "." + file.name.split(".").pop()?.toLowerCase()

        if (sizeInMB > maxSize) {
          alert(t("fileUpload.fileTooLarge", { name: file.name, size: maxSize.toString() }))
          return false
        }

        if (!acceptedTypes.includes(extension)) {
          alert(t("fileUpload.fileTypeNotAllowed", { type: extension }))
          return false
        }

        return true
      })

      if (uploadedFiles.length + validFiles.length > maxFiles) {
        alert(t("fileUpload.maxFilesExceeded", { max: maxFiles.toString() }))
        return
      }

      // Initialize upload states
      const newUploads: UploadedFile[] = validFiles.map((file) => ({
        file,
        progress: 0,
        status: "uploading",
      }))

      setUploadedFiles((prev) => [...prev, ...newUploads])

      // Simulate upload process (replace with actual upload logic)
      for (let i = 0; i < validFiles.length; i++) {
        const file = validFiles[i]

        try {
          // Simulate progress
          for (let progress = 0; progress <= 100; progress += 10) {
            await new Promise((resolve) => setTimeout(resolve, 100))

            setUploadedFiles((prev) => prev.map((upload) => (upload.file === file ? { ...upload, progress } : upload)))
          }

          // Mark as success
          setUploadedFiles((prev) =>
            prev.map((upload) => (upload.file === file ? { ...upload, status: "success" } : upload)),
          )

          // Track analytics
          analytics.fileUpload({
            file_name: file.name,
            file_size: file.size,
            file_type: file.type || "unknown",
          })
        } catch {
          setUploadedFiles((prev) =>
            prev.map((upload) =>
              upload.file === file ? { ...upload, status: "error", error: "Error al subir archivo" } : upload,
            ),
          )
        }
      }

      // Update parent component
      const allFiles = [...uploadedFiles.map((u) => u.file), ...validFiles]
      onFilesChange(allFiles)
    },
    [uploadedFiles, maxFiles, maxSize, acceptedTypes, onFilesChange, t],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/octet-stream": [".stl", ".obj", ".step", ".stp"],
      "image/*": [".jpg", ".jpeg", ".png"],
      "application/pdf": [".pdf"],
    },
    maxFiles,
    maxSize: maxSize * 1024 * 1024,
  })

  const removeFile = (fileToRemove: File) => {
    setUploadedFiles((prev) => prev.filter((upload) => upload.file !== fileToRemove))
    const remainingFiles = uploadedFiles.filter((upload) => upload.file !== fileToRemove).map((upload) => upload.file)
    onFilesChange(remainingFiles)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
          isDragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
        }`}
        role="button"
        tabIndex={0}
        aria-label={t("accessibility.fileUploadArea")}
        aria-describedby="file-upload-description"
      >
        <input {...getInputProps()} aria-describedby="file-upload-description" />
        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" aria-hidden="true" />
        <p className="text-sm text-muted-foreground mb-2">
          {isDragActive ? t("fileUpload.dragActive") : t("fileUpload.dragDrop")}
        </p>
        <p id="file-upload-description" className="text-xs text-muted-foreground mb-2">
          {t("fileUpload.supportedFormats")} ({t("fileUpload.maxSize", { size: maxSize.toString() })})
        </p>
        <Button type="button" variant="outline" size="sm">
          {t("fileUpload.selectFiles")}
        </Button>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium">
            {t("fileUpload.filesUploaded")} ({uploadedFiles.length}/{maxFiles})
          </h4>
          {uploadedFiles.map((upload, index) => (
            <Card key={index} className="p-3">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{upload.file.name}</p>
                  <p className="text-xs text-muted-foreground">{formatFileSize(upload.file.size)}</p>
                  {upload.status === "uploading" && (
                    <>
                      <Progress
                        value={upload.progress}
                        className="mt-1 h-1"
                        aria-label={t("accessibility.uploadProgress", { percent: upload.progress.toString() })}
                      />
                      <div className="sr-only" aria-live="polite">
                        {t("accessibility.uploadProgress", { percent: upload.progress.toString() })}
                      </div>
                    </>
                  )}
                  {upload.status === "error" && (
                    <p className="text-xs text-error mt-1 flex items-center gap-1" role="alert">
                      <AlertCircle className="h-3 w-3" aria-hidden="true" />
                      {upload.error}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {upload.status === "success" && (
                    <CheckCircle className="h-4 w-4 text-success" aria-label={t("accessibility.success")} />
                  )}
                  {upload.status === "error" && (
                    <AlertCircle className="h-4 w-4 text-error" aria-label={t("accessibility.error")} />
                  )}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(upload.file)}
                    aria-label={t("accessibility.removeFile", { name: upload.file.name })}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
